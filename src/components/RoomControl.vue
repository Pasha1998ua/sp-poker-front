<template>
  <div class="control-block">
    <button @click="joinRoom">Join</button>
    <button @click="leaveRoom">Leave</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SocketHelper from '@/helpers/socketHelper'
import localStorageHelper from '@/helpers/localStorageHelper'

const SOCKET_HELPER = SocketHelper.getInstance()

export default defineComponent({
  name: 'MainPage',
  data () {
    return {}
  },
  methods: {
    joinRoom () {
      SOCKET_HELPER.joinRoom('PavloKey', localStorageHelper.getUserName())
    },
    leaveRoom () {
      SOCKET_HELPER.leaveRoom('PavloKey', localStorageHelper.getUserName())
    }
  }
})
</script>

<style scoped lang="scss">
</style>
