import { shallowMount } from '@vue/test-utils'
import Chat from '@/components/Chat.vue'
import store from '@/store'

describe('Chat.vue', () => {
  it('renders page correctly', () => {
    const wrapper = shallowMount(Chat, {
      global: {
        mocks: {
          $store: store
        }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
