<script setup>
defineProps({
  cartToggle: Function,
  totalPrice: Number,
})
</script>
<template>
<header class="flex justify-between px-10 border-b border-slate-300">

<router-link to="/">
  <div class="flex items-center gap-4">
  <img src="/logo.png" alt="Logo" class="w-10"/>
  <div>
    <h2 class="text-xl font-bold uppercase">vue sneakers</h2>
    <p class="text-slate-400">True sneakers shop</p>
  </div>
</div>
</router-link>

<nav class="flex items-center">
  <ul class="flex items-center gap-10">

    <li @click="cartToggle" class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black">
      <img src="/cart.svg" alt="cart">
      <b>{{ totalPrice }} USD</b>
    </li>

    <router-link to="/favorites">
      <li class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black">
      <img src="/heart.svg" alt="Bookmarks">
      <span>Favorites</span>
    </li>
    </router-link>

    <li class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black">
      <img src="/profile.svg" alt="profile">
      <span>Profile</span>
    </li>

  </ul>
</nav>
</header>
</template>
