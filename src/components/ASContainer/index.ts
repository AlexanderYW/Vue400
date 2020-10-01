import ASContainer from './ASContainer.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue: Vue.VueConstructor) {
    registerComponent(Vue, ASContainer)
  }
}

use(Plugin)

export default Plugin

export {
  ASContainer
}