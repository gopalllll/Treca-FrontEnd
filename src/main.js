import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import App from './App.vue';
import { router } from './router';
import { VueDraggableNext } from "vue-draggable-next";

// setup fake backend
import { fakeBackend } from './helpers';
fakeBackend();

const app = createApp(App);

app.use(createPinia());
app.use(router);


app.mount('#app');
