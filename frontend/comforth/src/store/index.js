import { createStore } from 'vuex'

const theUrl = 'https://comforthdatabase.onrender.com/';
import axios from 'axios';
import { useCookies } from "vue3-cookies";

const cookies = useCookies();

export default createStore({
  state: {
    products : null,
    product : null,
    users : null,
    user : null,
    userLogin:false,
    cart:[],
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
    setUsers(state, users ){
      state.users = users;
      console.log(users)
    },
    setUser(state, user ){
      state.user = user;
      console.log(user)
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
    async fetchProduct(context) {
      try{
        const {data} = await axios.get(`${theUrl}Products/:id`)
        if (data.results) {
          context.commit("setProduct", data.results)
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
    async fetchUsers(context) {
      try{
        const {data} = await axios.get(`${theUrl}Users`)
        if (data.results) {
          context.commit("setUsers", data.results)
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
    async fetchUser(context) {
      try{
        const {data} = await axios.get(`${theUrl}Users/:id`)
        if (data.results) {
          context.commit("setUser", data.results)
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
    async register(context, payload) {
      let res = await axios.post(`${theUrl}register`, payload);
      console.log('Result:', res);
      let {result, msg, err} = await res.data;
      if(msg) {
        context.commit('setUsers', msg)
        context.commit(`setSpinner`, false);
      }else{
        context.commit(`setMsg`, err)
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${theUrl}login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { result, msg });
          cookies.set("client", { msg, token, result });
          authuser.applyToken(token);
          sweetAlert({
            title: msg,
            text: `Welcome back ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "home" });
        } else {
          sweetAlert({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 2000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
  },
  modules: {
  }
})
