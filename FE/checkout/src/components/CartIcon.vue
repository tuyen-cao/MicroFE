<template>
  <a class="icon-container" @click="navigateToCart">
    <i class="fa fa-shopping-bag" />
    <span>{{ totalItems }}</span>
   <!--  <p>{{ test }}</p> -->
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
    //const test = ref(totalItems)
    console.log( totalItems.value)
    const test = ref(totalItems.value)
    cartStore.load();
    return { cartStore, totalItems, test };
  },
  mounted() {
    document.body.addEventListener("update-cart", (e: any) => {
     this.updateCart()
    });
 
  },
  methods: {
    navigateToCart() {
      this.navigate("/shopping-cart");
    },
    async updateCart() {
      await  nextTick()
      this.test = globalStorage.getCartData()?.totalItems as number
    }
    
  }
});
</script>
