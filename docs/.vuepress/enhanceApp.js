import Element from 'element-ui'
import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/dark.css'
import 'element-ui/lib/theme-chalk/index.css'
import './public/index.scss'
export default ({
  Vue,
}) => {
  Vue.config.productionTip = false
  Vue.use(Element)
  Vue.use(VueHighlightJS)
}