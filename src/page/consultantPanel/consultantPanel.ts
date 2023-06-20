import { createApp } from 'vue'
import consultantPanel from './consultantPanel.vue'
import { Vue } from 'vue-class-component'

const a = createApp(consultantPanel)
a.mount('#app')