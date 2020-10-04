/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

// import * as components from '../../src/components'
import { ASTable } from '../../src/components/ASTable'

storiesOf('ASTable', module)
  .add('Table', () => ({
    components: { ASTable },
    template: '<ASTable :headers="headers" :items="items" />',
    data() {
        return {
            headers: [
                {key: 'id', label: 'ID', align: 'left'},
                {key: 'name', label: 'Name', align: 'left'},
                {key: 'price', label: 'Price', align: 'right'},
            ],
            items: [
                { id: 1, name: 'OnePlus 7T', price: 7000 },
                { id: 1, name: 'OnePlus 7 PRO', price: 6000 },
                { id: 1, name: 'OnePlus 6T', price: 4500 }
            ]
        }
    }
  } as object))
  .add('Table fluid', () => ({
    components: { ASTable },
    template: '<ASTable :headers="headers" :items="items" fluid />',
    data() {
        return {
            headers: [
                {key: 'id', label: 'ID', align: 'left'},
                {key: 'name', label: 'Name', align: 'left'},
                {key: 'price', label: 'Price', align: 'right'},
            ],
            items: [
                { id: 1, name: 'OnePlus 7T', price: 7000 },
                { id: 1, name: 'OnePlus 7 PRO', price: 6000 },
                { id: 1, name: 'OnePlus 6T', price: 4500 }
            ]
        }
    }
  } as object))