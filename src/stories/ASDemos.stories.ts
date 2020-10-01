/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

// import * as components from '../components'
import { ASTable } from '../components/ASTable'
import { ASCommandline } from '../components/ASCommandline'
import { ASFunctionKey } from '../components/ASFunctionKey'
import { ASGrid, ASGridSite, ASGridItem } from '../components/ASGrid'

storiesOf('AS Demos', module)
  .add('Food menu', () => ({
    components: { ASTable, ASCommandline, ASFunctionKey, ASGrid, ASGridSite, ASGridItem },
    template: `
    <ASGridSite gridTemplateRows="80px calc(100vh - 200px) 60px">
        <ASGridItem columnStart="1" columnSpan="12" gridArea="header">
            Pizza Matador
        </ASGridItem>
        <ASGridItem columnStart="1" columnSpan="12" gridArea="main">
            <ASGrid>
                <ASGridItem columnStart="1" columnSpan="8">
                    <ASTable :headers="menuHeaders" :items="menuItems" fluid />
                </ASGridItem>
                <ASGridItem columnStart="9" columnSpan="4">
                    <ASTable :headers="cartHeaders" :items="cartItems" fluid />
                </ASGridItem>
            </ASGrid>
        </ASGridItem>
        <ASGridItem gridArea="footer">
            <ASGrid>
                <ASGridItem columnStart="1" columnSpan="12">
                    <ASCommandline v-model="commandValue" label="Enter number to add to cart" />
                </ASGridItem>
                <ASGridItem columnStart="1" columnSpan="12" class="pt-6">
                    <ASGrid>
                        <ASGridItem>
                            <ASFunctionKey trigger="f1" label="Help" @action="action" />
                        </ASGridItem>
                        <ASGridItem>
                            <ASFunctionKey trigger="f3" label="Exit" @action="action" />
                        </ASGridItem>
                        <ASGridItem>
                            <ASFunctionKey trigger="f4" label="Prompt" @action="action" />
                        </ASGridItem>
                        <ASGridItem>
                            <ASFunctionKey trigger="f5" label="Refresh" @action="action" />
                        </ASGridItem>
                        <ASGridItem>
                            <ASFunctionKey trigger="f12" label="Cancel" @action="action" />
                        </ASGridItem>
                        <ASGridItem>
                            <ASFunctionKey trigger="enter" label="Save" @action="addToCart" />
                        </ASGridItem>
                    </ASGrid>
                </ASGriditem>
            </ASGrid>
        </ASGridItem>
    </ASGridSite>
    `, // (\d+) (\w+) NUMBER (\d+)
    methods: {
        action: () => {
            alert('Action triggered!')
        },
        addToCart: function() {
            const regex = /(\d+) (\w+) NUMBER (\d+)$/;
            const commandValue = this.commandValue

            const match = commandValue.match(regex) 

            const foundItem = this.menuItems.find(item => item.id == match[3])
            const matchingPizzaIndex = this.cartItems.findIndex(item => (item.id === match[3] && item.size === match[2]))
            if (matchingPizzaIndex === -1) {
                this.cartItems.push({
                    id: match[3],
                    quantity: parseInt(match[1]),
                    name: `${foundItem.name} - ${match[2]}`,
                    size: match[2],
                    price: match[2].toLowerCase() === 'family' ? foundItem.familyPrice: foundItem.normalPrice,
                })
            } else {
                this.$set(this.cartItems, matchingPizzaIndex, {
                    ...this.cartItems[matchingPizzaIndex],
                    quantity: this.cartItems[matchingPizzaIndex].quantity + parseInt(match[1])
                })

                console.log(this.cartItems[matchingPizzaIndex])
            }
        }
    },
    data() {
        return {
            commandValue: '',
            menuHeaders: [
                {key: 'id', label: 'ID', align: 'left'},
                {key: 'name', label: 'Name', align: 'left'},
                {key: 'description', label: 'Description', align: 'left'},
                {key: 'normalPrice', label: 'Original', align: 'right'},
                {key: 'familyPrice', label: 'Family', align: 'right'},
            ],
            menuItems: [
                { id: 1, name: 'Margherita', description: '', normalPrice: 45, familyPrice: 80 },
                { id: 2, name: 'Prosciutto', description: 'Ham', normalPrice: 50, familyPrice: 89 },
                { id: 3, name: 'Capricciosa', description: 'Ham, Mushrooms', normalPrice: 55, familyPrice: 89 },
                { id: 4, name: 'Pepperoni', description: 'Pepperoni, Paprika', normalPrice: 55, familyPrice: 89 },
                { id: 5, name: 'Pollo', description: 'Chicken, Mushrooms', normalPrice: 55, familyPrice: 89 },
                { id: 6, name: 'Tripicale', description: 'Ham, Pineapple', normalPrice: 55, familyPrice: 89 },
                { id: 7, name: 'Vegetariana', description: 'Artichoke, Paprika, Mushrooms, Olive, Onion', normalPrice: 55, familyPrice: 89 },
                { id: 8, name: 'Italiana', description: 'Onion, Meat sauce', normalPrice: 55, familyPrice: 89 },
                { id: 9, name: 'Cosentiana', description: 'Tuna, Mushrooms', normalPrice: 55, familyPrice: 89 },
                { id: 10, name: 'Siciliana', description: 'Olive, Paprika, Anchovies', normalPrice: 55, familyPrice: 89 },
                { id: 11, name: 'Napoletana', description: 'Capers, Anchovies', normalPrice: 55, familyPrice: 89 },
                { id: 12, name: 'Pizza of the house', description: 'Tuna, Artichoke, Paprika, Ham, Bacon', normalPrice: 65, familyPrice: 99 },
                { id: 13, name: 'Quattro Stagioni', description: 'Mushrooms, Ham, Shrimps, Artichoke', normalPrice: 60, familyPrice: 99 },
                { id: 14, name: 'Quattro formaggi', description: 'Mozarella, Gorgonzola, Feta, Parmesan', normalPrice: 60, familyPrice: 99 },
                { id: 15, name: 'Mafiosa', description: 'Ham, Mushrooms, Bacon, Meat sauce', normalPrice: 65, familyPrice: 99 },
                { id: 16, name: 'Sole Mio', description: 'Ham, Bacon, Pepperoni', normalPrice: 60, familyPrice: 99 },
                { id: 17, name: 'Marinara', description: 'Tuna, Shrimps', normalPrice: 60, familyPrice: 99 },
                { id: 18, name: 'MammaMia', description: 'Bacon, Gorgonzola, Shrimps', normalPrice: 65, familyPrice: 99 },
                { id: 19, name: 'Calzone (Closed pizza)', description: 'Ham, Mushrooms', normalPrice: 60 },
                { id: 20, name: 'Caprese', description: 'Pepperoni, Gorgonzola', normalPrice: 65, familyPrice: 99 },
                { id: 21, name: 'Parma', description: 'Gorgonzola, Parma ham', normalPrice: 65, familyPrice: 99 },
                { id: 22, name: 'Kartoffel Pizza', description: 'Potatos, Onion, Bacon, Rosemary', normalPrice: 65, familyPrice: 99 },
                { id: 23, name: 'Roma', description: 'Meat strips, Mushrooms', normalPrice: 60, familyPrice: 99 },
                { id: 24, name: 'San Remo', description: 'Meat strips, Paprika, Onion, Garlic', normalPrice: 65, familyPrice: 99 },
                { id: 25, name: 'Salami Italiano', description: 'Strong Italian salami', normalPrice: 60, familyPrice: 99 },
                { id: 26, name: 'Pizza Insalata', description: 'Meat strips, Salat, Dressing', normalPrice: 60, familyPrice: 99 }
            ],
            cartHeaders: [
                {key: 'quantity', label: 'Quantity', align: 'right'},
                {key: 'name', label: 'Name', align: 'left'},
                {key: 'price', label: 'Price', align: 'right'},
            ],
            cartItems: []
        }
    }
  } as object))