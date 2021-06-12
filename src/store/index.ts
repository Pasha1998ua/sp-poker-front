import { createStore } from 'vuex'
import SocketHelper from '@/helpers/socketHelper'
import ChatMessage from '@/models/ChatMessage'

const SOCKET_HELPER = SocketHelper.getInstance()

export default createStore({
  state: {
    messagePool: [] as Array<ChatMessage>
  },
  mutations: {
    addMessage (state, chatMsg: ChatMessage) {
      state.messagePool.push(chatMsg)
    }
  },
  actions: {
    listenMessages ({ commit }) {
      SOCKET_HELPER.listenMessages((chatMsg: ChatMessage) => {
        commit('addMessage', chatMsg)
      })
    },
    stopListening () {
      SOCKET_HELPER.stopListening()
    },
    // eslint-disable-next-line
    sendMessage ({ commit }, chatMsg: ChatMessage) {
      SOCKET_HELPER.sendMessage(chatMsg)
    }
  },
  getters: {
    getMessagePool (state): Array<ChatMessage> {
      return state.messagePool
    }
  },
  strict: true
})
