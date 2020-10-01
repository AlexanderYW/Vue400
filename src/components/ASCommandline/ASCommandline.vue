<template>
  <div class="as-commandline">
    <label v-if="label">{{ label }}</label>
    <span>===></span>
    <ASInput :value="value" fluid v-on="inputListeners" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model } from 'vue-property-decorator'
import { ASInput } from '../ASInput'

@Component({
  props: {
    label: {
      type: String,
      default: null
    }
  },
  components: {
    ASInput
  },
  computed: {
    inputListeners: function () {
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners
      )
    }
  },
})
export default class ASCommandline extends Vue {
  @Model('input', { type: String }) public value!: string
}
</script>

<style>

</style>