import { shallowMount } from '@vue/test-utils'
import RoomControl from '@/components/RoomControl.vue'

describe('RoomControl.vue', () => {
  it('renders page correctly', () => {
    const wrapper = shallowMount(RoomControl)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
