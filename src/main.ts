"use strict";
import Vue, { VueConstructor } from 'vue/types/umd'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import './scss/AS400.scss'

const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

import {
  use
} from './utils/helper'

const AS400 = {
  install (Vue: VueConstructor) {
    // Options
    // setOptions(Object.assign(config, options))
    // Components
    requireComponent.keys().forEach((componentName) => {
      // Get component config
      const componentConfig = requireComponent(componentName)
    
      // Register component globally
      Vue.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
      )
    })
  }
}

use(AS400)

export default AS400
