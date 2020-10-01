import ASMessageArea from './ASMessageArea.vue'

import { use, registerComponent } from '../../utils/helper'

export interface PluginObject<T> {
  install: Vue.PluginFunction<T>;
  [key: string]: any;
}

const Plugin: any = {
  install (Vue: Vue.VueConstructor) {
    registerComponent(Vue, ASMessageArea)
  }
}

use(Plugin)

export default Plugin

export {
  ASMessageArea
}