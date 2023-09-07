<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()

const searchUsers = (searchTerm) => {
  if (searchTerm !== '') {
    store.dispatch('users/filterUsers', searchTerm)
  } else {
    getUsers()
  }
}
const sortUsers = (newValue) => {
  if (newValue !== 'default') {
    store.commit('users/SORT_USERS', newValue)
  } else {
    store.commit('users/RESET_USERS')
  }
}

const users = computed(() => {
  return store.getters['users/users']
})

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
  <user-table :users="users" @updateSearchTerm="searchUsers" @sortUsers="sortUsers" />
</template>
