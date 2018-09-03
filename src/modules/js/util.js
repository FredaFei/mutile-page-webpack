class Utils{
  setSize(){
    function set(){
      let width = document.documentElement.clientWidth
      let fontSize = width / (750 / 100)
      fontSize = fontSize > 100 ? 100 : fontSize
      document.documentElement.style.fontSize = fontSize + 'px'
    }
    set()
    window.onresize = function(){
      set()
    }
  }
}

const utils = new Utils()
export default utils
