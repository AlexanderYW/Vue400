import { Vue, Component } from 'vue-property-decorator'

@Component
export class DataMixin extends Vue {
  data() {
    return {
      data: {
        style: {},
        class: {}
      }
    }
  }
}