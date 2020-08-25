import Element from "element-ui";
import VueHighlightJS from "vue-highlight.js";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import vue from "vue-highlight.js/lib/languages/vue";
import "highlight.js/styles/dark.css";
import "element-ui/lib/theme-chalk/index.css";
import "./public/index.scss";
export default ({ Vue }) => {
  Vue.config.productionTip = false;
  Vue.use(Element);
  Vue.use(VueHighlightJS, {
    // Register only languages that you want
    languages: {
      css,
      javascript,
      vue,
    },
  });
};
