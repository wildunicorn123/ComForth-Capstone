<template>
    <div class="container">
        <div class="card">
        <form @submit.prevent="login">
            <h1>login</h1>
            <div class="emailblock">
                <label for="emailAdd">Email</label>
                <input type="email" class="EMAIL" v-model="payload.UserEmail">
            </div>
            <div class="passblock">
                <label for="userPass">password</label>
                <input type="password" class="PASSWORD" v-model="payload.UserPassword">
            </div>
            <div class="buttons">
                <button type="submit" class="submit">login</button>
                <button type="reset"  class="reset">clear</button>
            </div>
        </form>
        <div>
            <router-link to="/register">Want to  create an account?Register now!</router-link>
        </div>
        </div>
    </div>
</template>
<script>
import sweetAlert from 'sweetalert'
export default {
    props: ['initialPayload'],
data() {
    return {
        payload: {
            UserEmail: '',
            UserPassword: ''
        }
    }
},
computed: {
    Msg() {
        return this.$store.state.Msg
    },
    user() {
        return this.$store.state.user
    }
},
methods: {
    login() {
        this.$store.dispatch('login', this.payload)
        .then(() => {
            sweetAlert({
            title: "success",
            text:"you are now logged in",
            icon:"success",
            confirmButtontext: "ok",
            timer:2000
        })
        })
        this.$router.push("/");
    }
},
mounted() {
}
};
</script>
<style scoped>
.container {
    padding-top: 8rem;
}
input {
    width: 100%;
    padding: 10px 0 10px 10px;
    margin: 0;
    border: 3px solid black;
    border-radius: 5px;
    box-shadow: 2px 2px 2px #f8bcbc, -2px -2px -2px ;
}
.buttons > button{
background-color:transparent!important;
}
label{
    font-weight:30px;
}

</style>