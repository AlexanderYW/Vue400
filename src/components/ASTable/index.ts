import ASTable from './ASTable.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue: Vue.VueConstructor) {
    registerComponent(Vue, ASTable)
  }
}

use(Plugin)

export default Plugin

export {
  ASTable
}