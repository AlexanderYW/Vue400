import ASInput from './ASInput.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue: Vue.VueConstructor) {
    registerComponent(Vue, ASInput)
  }
}

use(Plugin)

export default Plugin

export {
  ASInput
}