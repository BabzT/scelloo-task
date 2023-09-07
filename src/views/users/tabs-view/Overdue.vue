<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()

const getUsers = () => {
  let data = {
    status: 'overdue',
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
    <p class="text-red-600">Overdue</p>
  </div>
</template>
