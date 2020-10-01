import ASInputGroup from './ASInputGroup.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue: Vue.VueConstructor) {
    registerComponent(Vue, ASInputGroup)
  }
}

use(Plugin)

export default Plugin

export {
  ASInputGroup
}