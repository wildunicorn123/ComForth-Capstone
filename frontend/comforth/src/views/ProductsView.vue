<template>
   <div class="container">
    <h2 class="words">Check What Is In-Store</h2>
    <div class="top"><Filter @apply-filter="newdataDisplay"></Filter>
    <sortComp @apply-sort="newdataDisplay"></sortComp></div>
    <div class="row">
 <div class="col d-flex flex-wrap align-items-center gap-5 p-5" v-if="products">
            <div class="card mb-5" v-for="product of products" :key="product.ProductID">
                <img :src="product.ProductImage">
                <div class="card-body">
                    <h7 class="mt-2">{{product.ProductName}}</h7>
                    <p>R {{product.Price}}</p>
                    <button class="ton">Add to🛒</button>
                    <button class="ton">See more</button>
                </div>
            </div>
        </div>
        <div v-else><Spinner/></div>
    </div>
</div>
</template>
<script>
import Filter from '../components/filter-Comp.vue'
import Spinner from '../components/spinnerComp.vue'
import sortComp from '../components/sortComp.vue'
    export default{
        components:{ Filter, Spinner, sortComp},
    data(){
        return{
            outputData:[],
            disDt:[],
            dt:[]
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
.words{
    animation:slideInLeft 1s ease-in;
    font-family:fantasy;
}
@keyframes slideInLeft{
    from{
    transform: translateX(-300px);
}
to{
    transform: translateX(0);
}
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
    width:200px!important;
    height:130px!important;
    color:black!important;
} 
.ton{
  background:transparent!important;
}
.container{
    margin-top:50px;
}
.lol{
    margin-top:50px;
    margin-bottom:40px;
}
</style>
