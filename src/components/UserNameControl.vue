<template>
  <div class="set-user-name-block">
    <button @click="setUserName">Set User Name</button>
    <input v-model="inputVal">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import localStorageHelper from '@/helpers/localStorageHelper'

export default defineComponent({
  name: 'MainPage',
  data () {
    return {
      inputVal: '' as string
    }
  },
  methods: {
    setUserName () {
      localStorageHelper.setUserName(this.inputVal)
    }
  }
})
</script>

<style scoped lang="scss">
</style>
