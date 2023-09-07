<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, ref, watch } from 'vue'

const store = useStore()
const sort_value = ref('default')
const filter = ref(false)
const searchterm = ref('')
const payee = ref([])

// watch(searchterm, (newValue) => {
//   if (newValue !== '') {
//     store.dispatch('users/filterUsers', newValue)
//   } else {
//     sort_value.value = 'default'
//     getUsers()
//   }
// })

const searchUsers = (searchTerm) => {
  if (searchTerm !== '') {
    store.dispatch('users/filterUsers', searchTerm)
  } else {
    sort_value.value = 'default'
    getUsers()
  }
  console.log(searchTerm)
}
watch(sort_value, (newValue) => {
  if (newValue !== 'default') {
    store.commit('users/SORT_USERS', newValue)
  } else {
    store.commit('users/RESET_USERS')
  }
})

const toggleFilter = () => {
  filter.value = !filter.value
}

const markAsPaid = () => {
  store.dispatch('users/markAsPaid', payee.value)
  payee.value = []
}

const users = computed(() => {
  return store.getters['users/users']
})

const getUsers = () => {
  let data = {
    status: 'paid',
    keyword: searchterm.value
  }
  store.dispatch('users/getUsersData', data)
}

onMounted(() => {
  getUsers()
})
</script>

<template>
  <user-table :users="users" @updateSearchTerm="searchUsers" />
</template>
