<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()

onMounted(() => {
  store.dispatch('users/getUsersData', 'unpaid')
})
</script>

<template>
  <div class="border-blue-600 border">
    <p class="text-red-600">Unpaid</p>
  </div>
</template>
