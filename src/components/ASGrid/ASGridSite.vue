<template>
  <div
    class="as-grid-site"
    :style="templateComputedStyle"
  >
    <slot />
  </div>
</template>

<script>
import { gridUtilsMixin, gridSiteMixin } from '../../mixins/grid'

export default {
  name: 'ASGrid',
  mixins: [
    gridUtilsMixin,
    gridSiteMixin
  ],
  props: {
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  mounted () {
  },
  created () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>