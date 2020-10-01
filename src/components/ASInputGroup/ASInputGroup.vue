<template>
  <div class="as-input-group">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model } from 'vue-property-decorator'
import { FluidMixin } from '../../mixins/fluid'
import { DataMixin } from '../../mixins/data'

@Component({
  mixins: [DataMixin, FluidMixin],
  props: {
    label: {
      type: String,
      default: null
    },
  },
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event: any) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
})
export default class ASInputGroup extends Vue {
  @Model('input', { type: String }) public value!: string
}
</script>

<style>

</style>