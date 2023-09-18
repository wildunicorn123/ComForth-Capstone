<template>
<div class="something">
    <h>Admin Page</h>
</div>
<table class="table" v-if="product">
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>id</th>
            <th>Add or Del</th>
        </tr>
        <tr v-for="product of products" :key="product.ProductID">
            <td>{{product.ProductName}}</td>
            <td>R {{product.Price}}</td>
            <td>{{product.ProductID}}</td>
            <th><button>Add</button><button>Del</button></th>
        </tr>
</table>
</template>
<script>
export default{
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