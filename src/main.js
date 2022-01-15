import {createApp} from "vue";
import App from "./App.vue";
import clickOuside from '@/common/directives/click-outside';
import "./registerServiceWorker";
import '@/assets/styles/global.scss';

createApp(App).directive('click-outside', clickOuside).mount("#app");
