<script setup>
import { computed, provide, ref, watch } from 'vue'
import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'
import { TAX_RATE } from './const'

const cart = ref([]);

const totalPrice = computed(() => cart.value.reduce((sum, item) => sum + item.price, 0));
const taxAmount = computed(() => Math.round(totalPrice.value * TAX_RATE));

const isCartOpen = ref(false);

const cartToggle = () => {
  isCartOpen.value = !isCartOpen.value;
}

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  {
    deep: true,
  },
)

console.log('item', cart);



const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

provide('cart', {
  cart,
  cartToggle,
  addToCart,
  removeFromCart,
})
</script>

<template>
  <Drawer v-if="isCartOpen" :total-price="totalPrice" :tax-amount="taxAmount" />
  <div class="w-4/5 m-auto bg-white shadow-xl my-14 rounded-xl">
    <Header :total-price="totalPrice" :cartToggle="cartToggle" />

    <div class="p-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
