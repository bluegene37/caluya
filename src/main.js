// Gene - Oct 06, 2026: Vue 3 Application Entrypoint for Municipality of Caluya Portal

import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

// Gene - Oct 06, 2026: Installed Vue Router for multi-page routing
/*
createApp(App).mount('#app');
*/
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
