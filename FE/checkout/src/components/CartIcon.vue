<template>
  <a class="icon-container" @click="navigateToCart">
    <i class="fa fa-shopping-bag" />
    <span>{{ totalItems }}</span>
  </a>
  
</template>
<script lang="ts">
import { useCartStore } from "@/store/cart";
import { storeToRefs } from "pinia";
import { defineComponent, nextTick, ref } from "vue";
import globalStorage from "@/utils/loadStorage";
export default defineComponent({
  name: "CartIcon",
  props: ["navigate"],
  
  setup() {
    const cartStore = useCartStore();
    const { totalItems } = storeToRefs(cartStore);
    const test = ref(totalItems.value)
    cartStore.load();
    console.log("update setup", globalStorage.getCartData() )
    return { cartStore, totalItems, test };
  },
  mounted() {
    document.body.addEventListener("update-cart", (e: any) => {
     this.updateCart(e.detail.cartItem)
    });
 
  },
  methods: {
    navigateToCart() {
      this.navigate("/shopping-cart");
    },
    async updateCart(item: any) {
      await  nextTick()
     this.cartStore.load();
     if(globalStorage.getCartData()?.totalItems !== this.cartStore.totalItems) {
      this.cartStore.addItem(item)
     }
    }
  }
});
</script>
