import { shallowMount } from '@vue/test-utils'
import MainPage from '@/views/MainPage.vue'

describe('MainPage.vue', () => {
  it('renders page correctly', () => {
    const wrapper = shallowMount(MainPage)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
