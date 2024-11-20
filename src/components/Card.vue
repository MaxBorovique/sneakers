<script setup>
defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
})
</script>

<template>
  <div
    class="m-auto relative p-8 transition bg-white cursor-pointer max-w-[400px] border-slate-100 rounded-3xl hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      v-if="onClickFavorite"
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="add to favorite button"
      class="absolute top-9 left-9 hover:scale-125 hover:border-[#ff8585] hover:border hover:rounded-xl"
      @click="onClickFavorite"
    />
    <div class="max-w-[226px] rounded-l h-[226px]">
      <img class="object-contain w-full h-full" :src="imageUrl" alt="sneakers" />
    </div>
    <p class="mt-2">{{ title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Price:</span>
        <b>{{ price }} USD</b>
      </div>
          <img
            v-if="onClickFavorite"
            :src="!isAdded ? '/plus.svg' : '/checked.svg'"
            alt="add button"
            @click="onClickAdd"
            class="hover:scale-125"
          />
    </div>
  </div>
</template>
