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
    return {
      updateInfoInterval: 0 as number,
      updateInfoIntervalTime: 2000 as number
    }
  },
  methods: {
    joinRoom () {
      SOCKET_HELPER.joinRoom('PavloKey', localStorageHelper.getUserId(), localStorageHelper.getUserName())
      if (this.updateInfoInterval) {
        clearInterval(this.updateInfoInterval)
      }
      this.updateInfoInterval = setInterval(() => {
        SOCKET_HELPER.updateInfo('PavloKey', localStorageHelper.getUserId(), localStorageHelper.getUserName())
      }, this.updateInfoIntervalTime)
    },
    leaveRoom () {
      SOCKET_HELPER.leaveRoom('PavloKey', localStorageHelper.getUserId(), localStorageHelper.getUserName())
      if (this.updateInfoInterval) {
        clearInterval(this.updateInfoInterval)
        this.updateInfoInterval = 0
      }
    }
  }
})
</script>

<style scoped lang="scss">
</style>
