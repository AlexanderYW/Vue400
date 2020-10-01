import ASMenu from './ASMenu.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin: any = {
  install (Vue: Vue.VueConstructor) {
    registerComponent(Vue, ASMenu)
  }
}

use(Plugin)

export default Plugin

export {
  ASMenu
}