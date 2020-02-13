<template>
  <div class="row">
    <div v-for="(item, index) in pageOfItems" :key="index" class="col-md-4 col-sm-6">
      <figure class="card card-product">
        <div class="img-wrap">
          <img class="img-fluid" src="https://via.placeholder.com/500xs300.png" />
        </div>
        <figcaption class="info-wrap">
          <h6 class="title text-dots">
            <a href="#">{{ item.name }}</a>
          </h6>
          <h6>৳{{ item.price }}</h6>
          <a @click="addToCart(item)" type="button" class="btn btn-success btn-sm">Add to Cart</a>
          <!-- action-wrap -->
        </figcaption>
      </figure>
      <!-- card // -->
    </div>

    <div class="card-footer pb-0 pt-3 col-12">
      <jw-pagination :items="items" :pageSize="6" @changePage="onChangePage"></jw-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      pageOfItems: []
    };
  },
  methods: {
    addToCart(item) {
      this.$emit("newItemAdded", item);
    },
    onChangePage(items) {
      this.pageOfItems = items;
    }
  }
};
</script>

<style></style>
