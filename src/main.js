import { createApp } from "vue";
import App from "./myVue/作用域插槽尝试/App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
