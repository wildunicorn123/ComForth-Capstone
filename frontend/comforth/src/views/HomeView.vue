<template>
<div class="hero" >
            <div class="text1">
                <p>ComForth, Live well and sleep well too.</p>
                <button class="text-black"><router-link to="./ProductsView.vue" class="text-black"><em>SEE ITEMS</em></router-link></button>
            </div>
        </div>
            <div class="container " style="position:relative;">
                <section class="row gap-5">
                        <div id="product1" class="col d-flex flex-column align-items-center gap-3 p-4">
                            <a><font-awesome-icon :icon="['fas', 'mobile']" size="8x" style="color: #d1174c;" /></a>
                            <h5 class="text-black">Easy to Access</h5>
                            <p class="text-black text-center px-3">
                                Order online by using your cellphone
                                </p>
                                <router-link class="custom-btn" to="./ProductsView.vue">View All</router-link>
                        </div>
                        <div id="product2" class="col d-flex flex-column align-items-center gap-3 p-4">
                            <a><font-awesome-icon :icon="['fas', 'clock']" size="8x" style="color: #d1174c;" /></a>
                            <h5 class="text-black">By When</h5>
                            <p class="text-black text-center px-3">
                                Let us know by when you need it.
                                </p>
                                <router-link class="custom-btn" to="./ProductsView.vue">View All</router-link>
                        </div>
                        <div id="product3" class="col d-flex flex-column align-items-center gap-3 p-4">
                            <a><font-awesome-icon :icon="['fas', 'home']" size="8x" style="color:#d1174c;" /></a>
                            <h5 class="text-black">Convenient</h5>

                            <p class="text-black text-center px-3">
                                Collect in-store or have it Delivered to your Home.
                                </p>
                                <router-link class="custom-btn" to="./ProductsView.vue">View All</router-link>

                        </div>
                </section>
            </div>
            <div>
                <div class="red">
                    <h3>Available in-store</h3>
                </div>
                <div class="bg-light w-100 p-350 h-auto">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2" aria-current="true"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3" aria-current="true"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                                aria-label="Slide 4" aria-current="true"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                                aria-label="Slide 5"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://i.postimg.cc/WzK0mYpf/minimalist-comfort-set.jpg" class="test-img d-block  d-flex justify-content-center w-100" alt="picture" loading="lazy">
                            </div>
                            <div class="carousel-item">
                                <img src="https://i.postimg.cc/BZyFVysm/adjustable-beds.jpg" class=" test-img  d-block w-100 d-flex justify-content-center" alt="..." loading="lazy">
                            </div>
                            <div class="carousel-item">
                                <img src="https://i.postimg.cc/05p6VNWy/convertable-bed.webp" class="test-img  d-block w-100 d-flex justify-content-center" alt="..." loading="lazy">
                            </div>
                            <div class="carousel-item">
                                <img src="https://i.postimg.cc/g2r2bcDR/Mahogany-sofa-set.webp" alt="..." class="test-img  d-block w-100 d-flex justify-content-center" loading="lazy">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    </div></div>
                    <div class="container " style="position:relative;">
          <section class="row gap-5">
            <div id="product1" class="col d-flex flex-column align-items-center gap-3 p-4">
                <div class="card" style="width: 18rem">
      <img src="https://i.postimg.cc/NGNGS15G/adjustable-beds.jpg
" class="card-img-top" alt="beds" style="height:18rem"/>
      <div class="card-body">
        <a href=""><h3 class="card-title ">Beds</h3></a> 
      </div>
      </div>
            </div>
              <div id="product1" class="col d-flex flex-column align-items-center gap-3 p-4">
                <div class="card" style="width: 18rem">
      <img src="https://i.postimg.cc/J7qncfbF/Grey-sofa-and-pine.jpg
" class="card-img-top" alt="sofa" />
      <div class="card-body">
       <a href=""><h3 class="card-title ">Sofas</h3></a> 
      </div>
      </div>
            </div>
              <div id="product1" class="col d-flex flex-column align-items-center gap-3 p-4">
                <div class="card" style="width: 18rem">
      <img src="
https://i.postimg.cc/T1CgzhBL/homey-dining-table.webp
" class="card-img-top" alt="dining" />
      <div class="card-body">
        <a href=""><h3 class="card-title">Dining sets</h3></a> 
      </div>
      </div>
            </div>
          </section>
          </div>
</template>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/berkelium-type');
.hero {
    min-height: 100vh;
    background: url(https://i.postimg.cc/7hbLVxfq/sleepingman-removebg-preview.png) no-repeat center center/cover;
    background-attachment: fixed;
    position: relative;
    min-width: 100%;
    max-width:100%;
    z-index: 1;
    font-family: 'Berkelium Type', sans-serif;
}
.text1 > p{
    font-size: 60px;
    font-weight: 100;
    color:white;
    font-family: 'Berkelium Type', sans-serif;
    border: 2px;
    border-color: 2px #d1174c;
}
.text1 > button{
    text-decoration:none;
    text-transform:uppercase;
    font-weight: 300px;;
    font-size:20px;
    width:150px;
    background-color:#c1121f;
    height:50px;
    padding:5px 5px 5px 5px;
    color:white;
    transition:  linear 0.5s;
    text-align:center;
    border-radius:10px;
}
.text1 > button:hover{
    background-color:transparent;
    border-radius:10px;
}
.text1{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.red{
    background-color: #d1774c;
    color:white;
    text-align:center;
    padding:10px 5px 10px 5px;
    font-family: 'Berkelium Type', sans-serif;
    font-size: 50px;
}
.list > ul > li > a:hover{
    background-color: #d1774c!important; 
}
.btn{
    color:#d1774c!important;
}
i{
    color:#d1774c!important;
}
.custom-btn:hover {
    background-color:rgb(255, 255, 255);
    background-color:white;
    color:#d1774c;
    opacity:1;
}
.custom-btn {
    text-decoration:none;
    text-transform:uppercase;
    font-weight:600;
    font-size:20px;
    width:150px;
    background-color:#d1774c;
    height:50px;
    padding:10px 10px 10px 10px;
    color:#fff;
    transition:  linear 0.5s;
    text-align:center;
    border-radius:15px;
}

.buttn{
    background-color:white;
    padding:10px 10px 10px 10px;
    border-radius: 9px;
    color:#d1774c;
    font-family: 'Berkelium Type', sans-serif;
}
.container{
    padding:200px 200px 200px 200px;
    color:white;
    font-family: 'Berkelium Type', sans-serif;
    margin: 10px 10px 10px 10px;
}

.txt > h1{
    font-size: 60px;
    font-weight: 100;
    color:#d1774c;
    font-family: 'Berkelium Type', sans-serif;
}
.txt{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.back{
    background-color: #d1774c;
    color:white;
    font-size:medium;
    font-family: 'Berkelium Type', sans-serif;
    padding: 100px 20px 100px 20px;
}


</style>