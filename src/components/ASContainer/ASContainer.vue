<template>
  <div class="as-container" :class="data.class">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { FluidMixin } from '../../mixins/fluid'
import { DataMixin } from '../../mixins/data'

@Component({
  mixins: [DataMixin, FluidMixin]
})
export default class ASContainer extends Vue {
}
</script>

<style>

</style>