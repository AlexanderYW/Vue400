/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

// import * as components from '../components'
import { ASContainer } from '../components/ASContainer'
import { ASGrid, ASGridItem } from '../components/ASGrid'

storiesOf('ASGrid', module)
  .add('Normal', () => ({
    components: { ASGrid, ASGridItem },
    template: `
        <ASGrid>
            <ASGridItem columnStart="1" columnSpan="4">1</ASGridItem>
            <ASGridItem columnStart="5" columnSpan="7">2</ASGridItem>
        </ASGrid>
    `
  } as object))
  .add('With container', () => ({
    components: { ASContainer, ASGrid, ASGridItem },
    template: `
        <ASContainer>
            <ASGrid>
                <ASGridItem columnStart="1" columnSpan="4">1</ASGridItem>
                <ASGridItem columnStart="5" columnSpan="7">2</ASGridItem>
            </ASGrid>
        </ASContainer>
    `
  } as object))