import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist-uni';

export function createApp() {
  const pinia = createPinia();
  pinia.use(piniaPersist)
  const app = createSSRApp(App);
  app.use(pinia)
  // setupPinia(app);
  return {
    app,
  };
}
