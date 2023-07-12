import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faTrash} from '@fortawesome/free-solid-svg-icons'
const app = createApp(App)

library.add(faTrash)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

//createApp(App).mount('#app')
