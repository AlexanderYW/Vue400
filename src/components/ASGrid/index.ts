import ASGrid from './ASGrid.vue'
import ASGridSite from './ASGridSite.vue'
import ASGridItem from './ASGridItem.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue: Vue.VueConstructor) {
    registerComponent(Vue, ASGrid),
    registerComponent(Vue, ASGridSite),
    registerComponent(Vue, ASGridItem)
  }
}

use(Plugin)

export default Plugin

export {
  ASGrid,
  ASGridSite,
  ASGridItem
}