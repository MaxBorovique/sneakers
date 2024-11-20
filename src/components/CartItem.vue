<script setup>
defineProps({
  item: Object,
  onClickRemove: Function,
})

</script>

<template>
  <div class="flex items-center w-full gap-4 p-4 border border-slate-200 rounded-xl">
    <img class="w-16 h-16" :src="item.imageUrl" :alt="item.title">

    <div class="flex flex-col flex-1">
      <p>{{ item.name }}</p>

      <div class="flex justify-between flex-1 w-full mt-2">
        <b class="flex-1">{{item.price}} USD</b>
        <img @click="onClickRemove" class="transition cursor-pointer opacity-40 hover:opacity-100" src="/close.svg">
      </div>
    </div>

  </div>
</template>
