import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBmwWfV7a07oiTSxj7XjactFFB6VOM72OQ",
  authDomain: "vue-calendar-e543b.firebaseapp.com",
  projectId: "vue-calendar-e543b",
  storageBucket: "vue-calendar-e543b.appspot.com",
  messagingSenderId: "346631369805",
  appId: "1:346631369805:web:b7c28548713ad952d95804"
})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
