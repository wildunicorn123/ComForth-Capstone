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
    async fetchProducts(context){
      try {
        let products = await (await fetch('https://comforthdatabase.onrender.com/Products')).json();
        if (products) {
          context.commit("setProducts", products)
        } else{
          alert("error")
        }
      }
      catch (error){
        console.error (error);
      }
    }
  },
  modules: {
  }
})
