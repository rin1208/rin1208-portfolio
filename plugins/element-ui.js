import Vue from "vue";
import ElementUI from "element-ui";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
import SimpleTimeline from "vue-simple-timeline";
import { Slide } from "vue-burger-menu";

Vue.component("slide", Slide);
Vue.use(SimpleTimeline);
Vue.component("v-icon", Icon);
const locale = require("element-ui/lib/locale/lang/ja");
Vue.use(ElementUI, { locale });
