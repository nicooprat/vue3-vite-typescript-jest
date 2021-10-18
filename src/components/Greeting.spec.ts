import { mount } from '@vue/test-utils'

import Greeting from '../../src/components/Greeting.vue'
console.log(import.meta)

describe('Greeting.vue', () => {
  it('renders a greeting', () => {
    const wrapper = mount(Greeting)
    expect(wrapper.text()).toMatch('Vue and TDD')
  })
})
