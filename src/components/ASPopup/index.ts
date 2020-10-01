import ASPopup from './ASPopup.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue: Vue.VueConstructor) {
    registerComponent(Vue, ASPopup)
  }
}

use(Plugin)

export default Plugin

export {
  ASPopup
}