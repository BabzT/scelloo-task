<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import All from './tabs-view/All.vue'
import Paid from './tabs-view/Paid.vue'
import Unpaid from './tabs-view/Unpaid.vue'
import Overdue from './tabs-view/Overdue.vue'

const store = useStore()
const currentTab = ref('All')

const totalAmount = computed(() => {
  return store.getters['users/total_amount']
})

const tabs = {
  All,
  Paid,
  Unpaid,
  Overdue
}

const switchTabs = (tab) => {
  currentTab.value = tab
}
</script>

<template>
  <main class="page_wrapper">
    <div>
      <h1 class="table_heading">USERS</h1>

      <!-- Tabs -->
      <div class="tabs_wrapper">
        <ul>
          <li
            :class="{ 'border-b-2 border-[#25213B] text-[#25213B]': currentTab === tab }"
            v-for="(_, tab) in tabs"
            :key="tab"
            @click="switchTabs(tab)"
          >
            {{ tab }}
          </li>
        </ul>
        <div>
          <p>
            Total payable amount:
            <span class="text-[#6D5BD0] font-intersemibold">${{ totalAmount.toFixed(2) }}</span> USD
          </p>
        </div>
      </div>

      <div class="mt-8">
        <component class="w-full" :is="tabs[currentTab]"></component>
      </div>
    </div>
  </main>
</template>
