import { VueConstructor } from 'vue/types/umd'

export const use = (plugin: Vue.PluginObject<{}>) => {
  if (typeof (window as any) !== 'undefined' && (window as any).Vue) {
    (window as any).Vue.use(plugin)
  }
}

export const registerComponent = (Vue: VueConstructor, component: any) => {
  Vue.component(component.name, component)
}

export const registerComponentProgrammatic = (Vue: VueConstructor, property: any, component: Vue.Component) => {
  Vue.prototype[property] = component
}