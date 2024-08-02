
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon, Swipe, SwipeItem, Sidebar, SidebarItem, NavBar } from 'vant'
import './style.css'
import 'vant/lib/index.css'
import './assets/css/reset.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Icon)
app.use(Swipe)
app.use(SwipeItem)
app.use(Sidebar)
app.use(SidebarItem)
app.use(NavBar)
app.mount('#app')
