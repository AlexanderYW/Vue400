import { Vue, Component, PropSync } from 'vue-property-decorator'

export interface FluidMixin extends Vue {
  data: {
    class: Object
  };
}

@Component
export class FluidMixin extends Vue {
  @PropSync('fluid', { type: Boolean }) syncedfluid!: boolean
  created() {
    // tslint:disable-next-line
    this.$set(this.data.class, 'fluid', this.syncedfluid)
  }
}