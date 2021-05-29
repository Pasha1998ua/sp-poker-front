<template>
  <div class="main-page">
    <button @click="emitMessage">Send</button>
    <input v-model="inputVal">
    <table class="chat-block">
      <tr v-for="(chatMsg,index) in messagePool" :key="index">
        <td>{{ chatMsg.sentTimestamp }}</td>
        <td>{{ chatMsg.userNickName }}</td>
        <td>{{ chatMsg.message }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import io from 'socket.io-client'
import ChatMessage from '@/models/ChatMessage'

const socket = io('http://localhost:8081', { transports: ['websocket'] })

export default defineComponent({
  name: 'MainPage',
  data () {
    return {
      inputVal: '' as string,
      messagePool: [] as Array<ChatMessage>
    }
  },
  created: function () {
    socket.on('chatMsgEvent', (chatMsg: ChatMessage) => {
      this.messagePool.push(chatMsg)
    })
  },
  methods: {
    emitMessage () {
      const chatMsg: ChatMessage = {
        userNickName: 'Temp User',
        sentTimestamp: Date.now(),
        message: this.inputVal
      }
      socket.emit('chatMsgEvent', chatMsg)
    }
  }
})
</script>

<style scoped lang="scss">
.chat-block {
  max-width: 600px;
  margin: 20px;
  border-collapse: collapse;

  td, th {
    padding: 0.5rem;
    border: 1px solid black;
  }
}
</style>
