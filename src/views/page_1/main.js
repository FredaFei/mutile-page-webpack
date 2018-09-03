// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './src/app'
import * as global from 'global/index'
import '../../modules/style/index.scss'

export default Object.keys(global).forEach(key => {
  Vue.use(global[key])
})

// import * as global from 'global/common'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
