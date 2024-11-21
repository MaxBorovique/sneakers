<script setup>
import CardList from '@/components/CardList.vue';
import { onMounted, ref } from 'vue';
import { fetchFavorites } from '../../firestoreService';

const favorites = ref([]);

onMounted(async() => {
  try {
    const data = await fetchFavorites();
    console.log(data);

    favorites.value = data.map(item => item.item);
  } catch (error) {
      console.log(error);
  }
})

</script>
<template>
  <h2 class="mb-8 text-3xl font-bold">My Favorites</h2>

  <CardList :items="favorites" is-favorites />
</template>
