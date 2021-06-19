import "font-awesome/css/font-awesome.css"
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from "./config/store"
import router from "./config/router"

Vue.config.productionTip = false

// TEMPORARIO
require("axios").defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IlZpbsOtY2l1cyBkZSBBbGPDom50cmEiLCJlbWFpbCI6InZpbmljaXVzYWxjYW50YXJhYmFycm9zQGdtYWlsLmNvbSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjI0MDYzMzEyLCJleHAiOjE2MjQzMjI1MTJ9.3VHTh2UX7oBVVdTcmsX6UKty6-20POg9J201zucc4CA'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')