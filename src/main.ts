import { createSSRApp } from "vue";
import App from "./App.vue";
// import { setupPinia } from '@/store';
// import { createPinia } from 'pinia';
// import piniaPersist from 'pinia-plugin-persist-uni';

export function createApp() {
  const app = createSSRApp(App);
  // const store = createPinia()
  // store.use(piniaPersist);
  // app.use(store);
  // setupPinia(app);
  return {
    app,
  };
}
