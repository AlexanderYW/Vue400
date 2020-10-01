import ASCommandline from './ASCommandline.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue: Vue.VueConstructor) {
    registerComponent(Vue, ASCommandline)
  }
}

use(Plugin)

export default Plugin

export {
  ASCommandline
}