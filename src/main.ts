// Create base vue app
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

// Import, set up and utilise router
import { router } from './middleware/router';
app.use(router);

// Import, set up and utilise highlight for vue
import highlightVuePlugin from './middleware/highlight';
app.use(highlightVuePlugin);

// Mount the application to id=app (#app)
app.mount('#app');
