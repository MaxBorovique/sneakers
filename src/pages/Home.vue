<script setup>
import CardList from '@/components/CardList.vue';
import { computed, inject, onMounted, ref, watch } from 'vue';
import debounce from 'lodash.debounce';
import { fetchFavorites, fetchItems } from '../../firestoreService';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from "../../firebase";

const { cart, addToCart, removeFromCart } = inject('cart');
const sortBy = ref('');
const items = ref([]);
const debouncedSearchQuery = ref('');

const loadItems  = async () => {
  try {
    const data  = await fetchItems();
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

const loadFavorites = async () => {
  try {
    const data = await fetchFavorites();
    items.value = items.value.map((item) => {
      const favorite = data.find((favorite) => favorite.parentId === item.id)

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

  await loadItems();
  await loadFavorites();
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
      const favoriteDocRef  = doc(db, 'favorites', String(item.id));
      const obj = {
        parentId: item.id,
        item,
      }

      await setDoc(favoriteDocRef, obj)

      item.isFavorite = true;
      item.favoriteId = item.id;
    } else {
      const favoriteDocRef  = doc(db, 'favorites', item.favoriteId);

      await deleteDoc(favoriteDocRef);

      item.isFavorite = false;
      item.favoriteId = null;

    }
  } catch (error) {
    console.log("Error updating favorites:", error);
  }
}




const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}
watch(sortBy, loadItems);
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
