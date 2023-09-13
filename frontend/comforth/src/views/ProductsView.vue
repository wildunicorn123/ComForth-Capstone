<template>
   <div class="container">
    <div class="row">
 <div class="col-3 d-flex flex-column align-items-center gap-4 p-4" v-if="products">
            <div class="card mb-5" v-for="product of products" :key="product.ProductID">
              <img :src="product.ProductImage">
                <div class="card-body">
                    <h5 class="mt-2">{{product.ProductName}}</h5>
                    <p>R {{product.Price}}</p>
                    <button>Add to🛒</button>
                    <button>See more</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default{
    data(){
        return{
            outputData:[],
            disDt:[]
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("fetchProducts")
    },
    methods:{
        newdataDisplay(data){
            this.outputData=data;
        },
    },
    }
</script>
<style scoped>
img{
    width:200px;
    height:130px;
}
 .col {
    box-shadow: 0 4px 8px 0 rgb(167, 72, 72) !important;
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
    color:black!important;
} 
.container{
  
}
</style>
