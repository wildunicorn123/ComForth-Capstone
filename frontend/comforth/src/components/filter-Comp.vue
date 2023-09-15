<template>
    <div class="col">
        <div class="row">
            <div class="col-sm-4 mx-1">
                <div class="row">
                    <label for="Categories" class="my-1">Filter</label>
                </div>
                <div class="row">
                    <select v-model="Category" id="categories" name="Category">
                    <option value="Beds">Beds</option>
                    <option value="Sofa">Sofa</option>
                    <option value="Bed Frame">Bed frame</option>
                    <option value="dining">dining</option>
                    <option value="Home decor">Home decor</option>
                </select>
                </div>
            </div>
            <div class="col-sm-2">
                <button @click="filter(products)">Filter</button>
            </div>
        </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            Category: null,
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    methods:{
        filter(data){
            if(this.Category){
                const dt = data.filter(products => products.Category.includes(this.Category))
                this.$emit("apply-filter", dt)
            }else if(this.Category){
                const dt = data.filter(products => products.Category.includes(this.Category) )
                this.$emit("apply-filter", dt)
            }
        }
    },
    mounted() {
        this.$store.dispatch("fetchProducts");
    }
}

</script>
<style scoped>
button{
    background-color:transparent!important;
    margin-top:10px!important;
}
</style>