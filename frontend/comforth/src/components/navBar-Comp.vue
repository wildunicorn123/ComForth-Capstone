<template>
<nav class="navbar fixed-top">
<div class="container-fluid">
    <router-link class="navbar-brand" to="/"><img src="https://i.postimg.cc/vT9Ghg4q/Furniture-Logo.png" class="logo" alt="logo"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Welcome to ComForth</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
    <div class="offcanvas-body">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/cart">🛒</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/login">Log-in</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/logout">Log-Out</router-link>
        </li>
    </ul>
        </div>
    </div>
</div>
</nav>
</template>
<style scoped>

</style>
