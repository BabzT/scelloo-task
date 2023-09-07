<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()

const getUsers = () => {
  let data = {
    status: 'unpaid',
    keyword: ''
  }
  store.dispatch('users/getUsersData', data)
}

onMounted(() => {
  getUsers()
})
</script>

<template>
  <div class="border-blue-600 border">
    <p class="text-red-600">Unpaid</p>
  </div>
</template>
