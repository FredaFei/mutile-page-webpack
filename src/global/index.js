import utils from 'modules/js/util'

const util = {}
util.install = Vue => {
  Vue.prototype.$util = utils
}
export default util
