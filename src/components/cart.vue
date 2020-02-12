<template>
  <ul class="list-group">
    <li v-for="(cart_item,index) in cart_items" :key="index" class="list-group-item">
      {{cart_item.name}} - {{cart_item.price}}
      <span
        @click="removeFromCart(index)"
        class="badge badge-danger"
      >x</span>
    </li>
    <div class="list-group">
      <a href="#" class="list-group-item active">Total Price : {{totalPrice}}</a>
    </div>
  </ul>
</template>

<script>
export default {
  props: ["cart_items"],
  methods: {
    removeFromCart(index) {
      this.$emit("removeFromCart", index);
    }
  },
  computed: {
    totalPrice() {
      var total = 0;
      this.cart_items.forEach(item => {
        total += parseFloat(item.price);
      });

      return total.toFixed(2);
    }
  }
};
</script>

<style>
#app {
}
</style>
