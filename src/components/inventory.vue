<template>
  <div class="row">
    <div v-for="(item,index) in items" :key="index" class="col-md-4 col-sm-6">
      <figure class="card card-product">
        <div class="img-wrap">
          <img class="img-fluid" src="https://via.placeholder.com/500xs300.png" />
        </div>
        <figcaption class="info-wrap">
          <h6 class="title text-dots">
            <a href="#">{{item.name}}</a>
          </h6>
          <h6>৳{{item.price}}</h6>
          <a @click="addToCart(item)" type="button" class="btn btn-success btn-sm">Add to Cart</a>
          <!-- action-wrap -->
        </figcaption>
      </figure>
      <!-- card // -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
  methods: {
    addToCart(item) {
      this.$emit("newItemAdded", item);
    }
  }
};
</script>

<style>
</style>
