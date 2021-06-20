<template>
  <div class="main-page">
    <UserNameControl/>
    <RoomControl/>
    <Chat/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Chat from '@/components/Chat.vue'
import RoomControl from '@/components/RoomControl.vue'
import UserNameControl from '@/components/UserNameControl.vue'

import localStorageHelper from '@/helpers/localStorageHelper'

export default defineComponent({
  name: 'MainPage',
  components: {
    Chat,
    RoomControl,
    UserNameControl
  },
  data () {
    return {}
  },
  created () {
    localStorageHelper.getUserId()
  }
})
</script>

<style scoped lang="scss">
</style>
