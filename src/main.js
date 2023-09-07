import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './index.css'
import router from './router'
import UserTable from '@/components/UserTable.vue'

const app = createApp(App)

app.component('user-table', UserTable)
app.use(store)
app.use(router)

app.mount('#app')
