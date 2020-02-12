<template>
  <div id="app">
    <navbar></navbar>
    <div style="margin-top:30px;" class="container">
      <div class="col-12">
        <div class="row">
          <div class="col-8">
            <inventory @newItemAdded="addCartItem" :items="items"></inventory>
          </div>

          <div class="col-4">
            <div class="alert alert-warning" role="alert">In Your Carts !</div>
            <cart
              @removeFromCart="removeItemFromCart"
              :cart_items="cart_items"
            ></cart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import inventory from "./components/inventory";
import cart from "./components/cart";
import data from "./../data.js";

export default {
  components: { navbar, inventory, cart },
  data() {
    return {
      items: [],
      cart_items: []
    };
  },
  mounted() {
    this.items = data;
  },
  methods: {
    addCartItem(item) {
      this.cart_items.push(item);
    },
    removeItemFromCart(index) {
      this.cart_items.splice(index, 1);
    }
  }
};
</script>

<style>
.card-product .img-wrap {
  border-radius: 3px 3px 0 0;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.card-product .img-wrap img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
}
.card-product .info-wrap {
  overflow: hidden;
  padding: 5px;
  border-top: 1px solid #eee;
}
.card-product .bottom-wrap {
  border-top: 1px solid #eee;
}

.label-rating {
  margin-right: 10px;
  color: #333;
  display: inline-block;
  vertical-align: middle;
}

.card-product .price-old {
  color: #999;
}
</style>
