import { Vue, Component, PropSync } from 'vue-property-decorator'

@Component
export class FluidMixin extends Vue {
  @PropSync('fluid', { type: Boolean }) syncedfluid!: boolean
  created() {
    this.$set(this.$data.class, 'fluid', this.syncedfluid)
  }
}