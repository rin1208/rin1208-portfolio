import Vue from "vue";
import ElementUI from "element-ui";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
Vue.component("v-icon", Icon);
const locale = require("element-ui/lib/locale/lang/ja");
Vue.use(ElementUI, { locale });
