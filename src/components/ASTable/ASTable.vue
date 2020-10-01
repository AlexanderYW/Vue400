<template>
  <div class="as-table" :class="data.class">
    <table>
        <thead v-if="headers">
            <tr>
                <th v-for="col in headers" :key="col.key" :align="col.align">
                    {{ col.label }}
                </th>
            </tr>
        </thead>
        <tbody v-if="items">
            <tr v-for="(item, index) in items" :key="index">
                <td v-for="col in headers" :key="`${index}-${col.key}`" :align="col.align">
                    <template v-if="col.type !== 'input'">
                        {{ item[col.key] }}
                    </template>
                    <ASInput v-else v-model="item[col.key]" />
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { FluidMixin } from '../../mixins/fluid'
import { DataMixin } from '../../mixins/data'
import { ASInput } from '../../components/ASInput'

@Component({
  components: {
    ASInput
  },
  mixins: [DataMixin, FluidMixin],
    props: {
        headers: {
            type: Array,
            default: null
        },
        items: {
            type: Array,
            default: null
        }
    }
})
export default class ASTable extends Vue {
}
</script>

<style>

</style>