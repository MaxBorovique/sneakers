<script setup>
import CardList from '@/components/CardList.vue';
import axios from 'axios';

import { BASE_URL } from '@/const';
import { computed, inject, onMounted, ref, watch } from 'vue';
import debounce from 'lodash.debounce';

const { cart, addToCart, removeFromCart } = inject('cart');
const sortBy = ref('');
const items = ref([]);  
const debouncedSearchQuery = ref('');

const fetchItems = async () => {
  try {
    const { data } = await axios.get(BASE_URL + 'items')
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false,
    }))
  } catch (error) {
    console.log(error)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(BASE_URL + 'favorites')
    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.parentId === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      }
    })
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  let localCart = [];
try {
  localCart = JSON.parse(localStorage.getItem('cart')) || [];
} catch (error) {
  console.error('Error parsing localStorage data:', error);
}
cart.value = localCart;

  await fetchItems()
  await fetchFavorites()
});

const debouncedSearch = debounce((query) => {
  debouncedSearchQuery.value = query
}, 700);

const onSearchChange = (event) => {
  debouncedSearch(event.target.value)
};

const filteredItems = computed(() => {
  const sortedItems = [...items.value]

  if (sortBy.value === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy.value === 'price') {
    sortedItems.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === '-price') {
    sortedItems.sort((a, b) => b.price - a.price)
  }

  return sortedItems.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearchQuery.value.toLowerCase()),
  )
})

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        parentId: item.id,
        item
      }
      item.isFavorite = true;

      const { data } = await axios.post(BASE_URL + 'favorites', obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(BASE_URL + 'favorites/' + item.favoriteId)
      item.favoriteId = null
    }
  } catch (error) {
    console.log(error)
  }
}



const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}
watch(sortBy, fetchItems);
watch(cart, () => {
  items.value = items.value.map(item => ({
    ...item,
    isAdded: false,
  }))
})

</script>
<template>
      <div class="flex items-center justify-between">
        <h2 class="mb-8 text-3xl font-bold">All sneakers</h2>

        <div class="flex gap-3">
          <select class="px-3 py-2 border rounded-md outline-none bg-inherit" v-model="sortBy">
            <option selected disabled value="">Sort by...</option>
            <option value="name">Name: A to Z</option>
            <option value="price">Price: Low to High</option>
            <option value="-price">Price: High to Low</option>
          </select>

          <div class="relative">
            <img src="/search.svg" class="absolute left-3 top-3" />
            <input
              placeholder="Search"
              type="text"
              class="py-2 pr-4 border rounded-md outline-none pl-11 focus:border-gray-400"
              @input="onSearchChange"
            />
          </div>
        </div>
      </div>
      <div class="mt-10">

        <CardList
          :items="filteredItems"
          @addToFavorite="addToFavorite"
          @add-to-cart="onClickAddPlus"
        />
      </div>
</template>
