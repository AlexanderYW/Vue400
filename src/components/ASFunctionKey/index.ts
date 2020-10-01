import ASFunctionKey from './ASFunctionKey.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue: Vue.VueConstructor) {
    registerComponent(Vue, ASFunctionKey)
  }
}

use(Plugin)

export default Plugin

export {
  ASFunctionKey
}