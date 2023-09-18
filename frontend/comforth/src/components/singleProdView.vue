<template>
      <div v-if="product" class="product" :key="product.ProductID">
                <div class="view-image">
                  <div class="smaller">
                    <img class="small" :src="product.ProductImage" />
                  </div>
                </div>
              </div>
            <div class="row desc1">
              <div class="col card">
                <div class="card-body">
                  <div class="name">
                    <h5>{{ product.ProductName }}</h5>
                  </div>
                  <div class="description">
                    <p class="fw-bold">Description: {{ product.ProductDesc }}</p>
                  </div>
                  <div class="price">
                    <p class="fw-bold">Price: R {{ product.Price }}</p><br>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
  </template>
  <script>
  export default{
    computed: {
      product() {
        return this.$store.state.product;
      },
      id() {
        return this.$route.params.id
      }
    },
    mounted() {
      console.log(this.id);
      this.$store.dispatch("fetchProduct", this.$route.params.id);
    },
    };
  </script>