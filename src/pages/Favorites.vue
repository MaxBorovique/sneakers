<script setup>
import CardList from '@/components/CardList.vue';
import { BASE_URL } from '@/const';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const favorites = ref([]);

onMounted(async() => {
  try {
    const { data } = await axios.get(BASE_URL + 'favorites');

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
