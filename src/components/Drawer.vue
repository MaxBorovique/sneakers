<script setup>
import DrawerHead from './DrawerHead.vue'
import CartItemList from './CartItemList.vue'
import InfoBlock from './InfoBlock.vue'
import { computed, inject, ref } from 'vue'
import { createOrder } from '../../firestoreService'

const props = defineProps({
  totalPrice: Number,
  taxAmount: Number,
})

const { cart } = inject('cart')

const isCreating = ref(false)
const orderId = ref(null)

const cartIsEmpty = computed(() => !cart.value.length)
const buttonDisabled = computed(() => isCreating.value || cartIsEmpty.value);

const handleCreateOrder = async () => {
  isCreating.value = true;
  try {
    const data = await createOrder(cart.value, props.totalPrice);

    cart.value = []

    orderId.value = data.id
  } catch (error) {
console.log(error);
  } finally {
    isCreating.value = false
  }
}
</script>

<template>
  <aside class="scroll-none">
    <div class="fixed top-0 left-0 z-10 w-full h-screen bg-black opacity-70"></div>
    <div class="fixed top-0 right-0 z-20 flex flex-col h-screen p-8 overflow-y-auto bg-white w-96">
      <DrawerHead />

      <div v-if="!totalPrice || orderId" class="flex items-center w-full h-full">
        <InfoBlock
          v-if="orderId && !totalPrice"
          title="Order Placed"
          :description="`Your Order #${orderId} Is on Its Way to You`"
          imageUrl="/order-success-icon.png"
        />

        <InfoBlock
          v-if="!totalPrice && !orderId"
          title="The cart is empty"
          description="Add at least one pair of sneakers to create an order"
          imageUrl="/package-icon.png"
        />
      </div>

      <div v-else class="flex-1 overflow-y-auto">
        <div class="flex flex-col justify-between w-full h-full">
          <CartItemList />

          <div class="sticky bottom-0 z-20 bg-white shadow-xl">
            <div class="flex flex-col gap-4 mt-7">
              <div class="flex gap-2">
                <span>Total:</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>{{ totalPrice }} USD</b>
              </div>

              <div class="flex gap-2">
                <span>Tax 5%:</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>{{ taxAmount }} USD</b>
              </div>
              <button
                :disabled="buttonDisabled"
                @click="handleCreateOrder"
                class="w-full py-3 mt-4 text-white transition cursor-pointer bg-lime-500 rounded-xl disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 disabled:cursor-not-allowed"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
