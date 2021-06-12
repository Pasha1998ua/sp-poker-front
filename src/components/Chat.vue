<template>
  <div class="chat-block">
    <button @click="emitMessage">Send</button>
    <input v-model="inputVal">
    <table class="chat-list">
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
import { mapActions, mapGetters } from 'vuex'
import ChatMessage from '@/models/ChatMessage'

export default defineComponent({
  name: 'MainPage',
  data () {
    return {
      inputVal: '' as string
    }
  },
  computed: {
    ...mapGetters({
      messagePool: 'getMessagePool'
    })
  },
  created () {
    this.listenMessages()
  },
  beforeUnmount () {
    this.stopListening()
  },
  methods: {
    ...mapActions({
      listenMessages: 'listenMessages',
      stopListening: 'stopListening',
      sendMessage: 'sendMessage'
    }),
    emitMessage () {
      const chatMsg: ChatMessage = {
        room: 'PavloKey',
        userNickName: 'Temp User',
        sentTimestamp: Date.now(),
        message: this.inputVal
      }
      this.sendMessage(chatMsg)
    }
  }
})
</script>

<style scoped lang="scss">
.chat-list {
  max-width: 600px;
  margin: 20px;
  border-collapse: collapse;

  td, th {
    padding: 0.5rem;
    border: 1px solid black;
  }
}
</style>
