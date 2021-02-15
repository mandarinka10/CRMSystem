import Vue from "vue"
import Vuelidate from 'vuelidate'
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import messagePlugin from './utils/massage.plugin'
import dateFilter from './filters/date.fiter.js'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyD7pAY0UJOvI9BtJn0oYX7Fs3WCa6T_oDs",
  authDomain: "mycrm-system.firebaseapp.com",
  projectId: "mycrm-system",
  storageBucket: "mycrm-system.appspot.com",
  messagingSenderId: "889389439737",
  appId: "1:889389439737:web:264da7fb269e7a6d7de028",
  measurementId: "G-3S3WJTXF6X"
})

let app 

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app") 
  }
})

