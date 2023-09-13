import { createStore } from 'vuex'

const theUrl = 'https://comforthdatabase.onrender.com/';
import axios from 'axios';

export default createStore({
  state: {
    products : null,
    product : null,
  },
  mutations: {
    setProducts(state, products ){
      state.products = products;
      console.log(products)
    },
    setProduct(state, product ){
      state.product = product;
      console.log(product)
    },
  },
  actions: {
    async fetchProducts(context) {
      try{
        const {data} = await axios.get(`${theUrl}Products`)
        if (data.results) {
          context.commit("setProducts", data.results)
        }else{
          sweetAlert({
            title:"Error",
            text:data.msg,
            icon:"error",
            timer:2000
          })
        }
      }catch(e){
        context.commit("setMessage", "An error occured")
        console.log(e);
      }
    },
  },

  modules: {
  }
})
