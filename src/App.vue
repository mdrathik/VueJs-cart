<template>
  <div id="app">
    <navbar></navbar>
    <div style="margin-top:30px;" class="container">
      <div class="col-12">
        <div class="row">
          <div class="col-8">
            <div class="row">
              <div class="col-md-3">
                <figure class="card card-product">
                  <div class="img-wrap">
                    <img class="img-fluid" src="https://via.placeholder.com/320x240.png" />
                  </div>
                  <figcaption class="info-wrap">
                    <h6 class="title text-dots">
                      <a href="#">Good item name</a>
                    </h6>
                    <div class="action-wrap">
                      <button type="button" class="btn btn-success btn-sm">Add to Cart</button>

                      <p>130 $</p>
                      <!-- price-wrap.// -->
                    </div>
                    <!-- action-wrap -->
                  </figcaption>
                </figure>
                <!-- card // -->
              </div>
            </div>
          </div>

          <div class="col-4">
            <h4>carts</h4>
            <cart></cart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import cart from "./components/cart";
export default {
  components: { navbar, cart }
};
</script>

<style>
.card-product .img-wrap {
  border-radius: 3px 3px 0 0;
  overflow: hidden;
  position: relative;
  height: 115px;
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
