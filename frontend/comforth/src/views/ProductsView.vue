<template>
<div>
    <h2 class="text-white">What we sell:</h2>
  <div class="container" v-if="products">
    <div class="row">
        <div
      class="col-3 d-flex flex-column align-items-center gap-4 p-4"
      v-for="product of products"
      :key="product.prodName"
    >
      <img
        :src="product.prodURL"
        :alt="product.Category"
      />
      <div class="card-body">
        <h5>{{ product.prodName }}</h5>
        <p>R{{ product.amount }}</p>
        <button @click="">See Details</button>
      </div>
    </div>
  </div>
</div>
<div class="text-white loading" v-else>
        Please,give us a moment...
        <Spinner/>
    </div>
    </div>
</template>
<script>
// import Spinner from '../components/spinner.vue'
// import singleProd from './singleprodView.vue'

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods:{
},
components:{Spinner, singleProd}
}
</script>
<style scoped>
img{
    width:200px;
    height:130px;
}
 .col {
    box-shadow: 0 4px 8px 0 #00bf63 !important;
    transition: 0.3s !important;
    width: 100%!important;
    
}
.row > .btn{
    border:2px solid #00bf63!important;
    border-radius: 0.5px!important;
}
.text-white{
    font-family: 'Rye', sans-serif;
}
.card-body{
    text-align:center;
     font-family: 'Doulos SIL Compact', sans-serif!important;
    width:200px!important;
    height:130px!important;
    color:white!important;
} 

</style>