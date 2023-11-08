//color codes = #4ABDAC,#FC4A1A,#F7B733,#DFDCE3

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Optionally install the BootstrapVue icon components plugin
import '@mdi/font/css/materialdesignicons.css'


import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from "vuetify/labs/components";
import "aos/dist/aos.css";

const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
  labsComponents,
});


const app = createApp(App);
app.use(store);
app.use(vuetify);
app.use(router);
app.mount("#app");
