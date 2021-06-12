<template>
  <div class="main-page">
    <RoomControl/>
    <Chat/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Chat from '@/components/Chat.vue'
import RoomControl from '@/components/RoomControl.vue'

export default defineComponent({
  name: 'MainPage',
  components: {
    Chat,
    RoomControl
  },
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">
</style>
