import { shallowMount } from '@vue/test-utils'
import UserNameControl from '@/components/UserNameControl.vue'

describe('UserNameControl.vue', () => {
  it('renders page correctly', () => {
    const wrapper = shallowMount(UserNameControl)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
