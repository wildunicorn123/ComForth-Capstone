import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */

import { faClock, faHome, faMobile } from "@fortawesome/free-solid-svg-icons";
import {  faFacebook, faGithub,  faInstagram,  faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
/* add icons to the library */
library.add(faMobile, faClock, faHome, faGithub,faTwitter,faFacebook,faInstagram,faLinkedinIn)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


import "bootstrap/dist/js/bootstrap.js";
import "bootstrap"