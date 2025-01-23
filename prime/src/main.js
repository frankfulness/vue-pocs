import "primeicons/primeicons.css";
import "./style.css";
import "./flags.css";
import "./assets/tailwind.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice';
import App from "./App.vue";
import router from './router';
import Ripple from 'primevue/ripple';


const app = createApp(App);
app.component("InputText", InputText);
app.directive('ripple', Ripple);

app.use(PrimeVue, { theme: "none", ripple: true });
app.use(router);
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);

app.mount("#app");

