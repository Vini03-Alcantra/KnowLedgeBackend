import "font-awesome/css/font-awesome.css"
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from "./config/store"
import router from "./config/router"

Vue.config.productionTip = false

// TEMPORARIO
require("axios").defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlZpbsOtY2l1cyBkZSBBbGPDom50cmEiLCJlbWFpbCI6InZpbmljaXVzYWxjYW50YXJAZW1haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYyNDkyODI0NywiZXhwIjoxNjI1MTg3NDQ3fQ.mmgEOwcVvPAQwP_BnY7bUMKxckEUNn5vO_dpVuJZm0I'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')