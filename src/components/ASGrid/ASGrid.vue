<template>
  <div
    class="as-grid"
    :style="templateAreaComputedStyle"
  >
    <slot />
  </div>
</template>

<script>
import { gridUtilsMixin, gridAreaMixin } from '../../mixins/grid'

export default {
  name: 'ASGrid',
  mixins: [
    gridUtilsMixin,
    gridAreaMixin
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