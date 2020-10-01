import ASHeader from './ASHeader.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue: Vue.VueConstructor) {
    registerComponent(Vue, ASHeader)
  }
}

use(Plugin)

export default Plugin

export {
  ASHeader
}