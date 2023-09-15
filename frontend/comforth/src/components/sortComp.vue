<template>
            <div class="col">
        <div class="row">
            <div class="col-sm-4 mx-1">
                <div class="row">
                    <label for="Categories" class="my-1">Sort</label>
                </div>
                <div class="row">
                    <select v-model="Category" id="categories" name="Category">
                    <option value="Beds">Ascending</option>
                    <option value="Sofa">Descending</option>
                </select>
                </div>
            </div>
            <div class="col-sm-2">
                <button @click="sortNames(products)">Sort</button>
            </div>
        </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            Sortname: null,
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    methods:{
        sortNames(data){
            if (this.Sortname) {
                if(this.Sortname=="Descending"){
                    const Sname =  data.sort(function(a,b){
                    if(b.prodName > a.prodName){
                    return -1
                    }
})
                    this.$emit("apply-sort", Sname)
                }else if(this.sName=="Ascending"){
                    const Sname = data.sort()
                    this.$emit("apply-sort", Sname)
                }
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