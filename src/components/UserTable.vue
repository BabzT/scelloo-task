<script setup>
import { useStore } from 'vuex'
import { ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'

const store = useStore()
const searchTerm = ref('')
const filterDropdown = ref(false)
const payee = ref([])
const selectAll = ref(false)
const expandedRow = ref(null)
const filtertarget = ref(null)
const sort_value = ref('default')

const emit = defineEmits(['updateSearchTerm', 'sortUsers'])

const props = defineProps({
  users: {
    type: Object
  }
})

// For sorting
watch(sort_value, (newValue) => {
  emit('sortUsers', newValue)
})

// For searching
watch(searchTerm, (newValue) => {
  if (newValue === '') {
    sort_value.value = 'default'
  }
})

// Open filter dropdown
const toggleFilter = () => {
  filterDropdown.value = !filterDropdown.value
}

// Expand table row
const toggleRow = (index) => {
  expandedRow.value = expandedRow.value === index ? null : index
}

// Mark as paid
const markAsPaid = () => {
  store.dispatch('users/markAsPaid', payee.value)
  payee.value = []
  selectAll.value = false
}

// Select user or All users
const isSelected = (user) => payee.value.includes(user)
const toggleSelection = (user) => {
  if (isSelected(user)) {
    payee.value = payee.value.filter((selected) => selected !== user)
  } else {
    payee.value.push(user)
  }
}

const selectAllUsers = () => {
  selectAll.value = !selectAll.value
  if (selectAll.value) {
    props.users.forEach((user) => {
      if (!isSelected(user.id)) {
        payee.value.push(user.id)
      }
    })
  } else {
    payee.value = []
  }
}

// Close filter dropdown when clicked outside
onClickOutside(filtertarget, () => (filterDropdown.value = false))
</script>

<template>
  <div class="table_wrapper">
    <div class="table_top">
      <div class="flex">
        <div ref="filtertarget" class="filter">
          <button @click="toggleFilter" class="filter_btn">
            <i class="fas fa-filter"></i>Filter
          </button>
          <!-- Filter dropdown -->
          <div class="filter_dropdown" v-if="filterDropdown">
            <h1>SORT BY:</h1>
            <label :class="{ 'bg-[#F2F0F9]': sort_value === 'default' }" for="default"
              >Default
              <input id="default" v-model="sort_value" type="radio" value="default" name="sort"
            /></label>
            <label :class="{ 'bg-[#F2F0F9]': sort_value === 'first_name' }" for="first_name"
              >First Name
              <input
                id="first_name"
                v-model="sort_value"
                type="radio"
                value="first_name"
                name="sort"
            /></label>
            <label :class="{ 'bg-[#F2F0F9]': sort_value === 'last_name' }" for="last_name"
              >Last Name
              <input id="last_name" v-model="sort_value" type="radio" value="last_name" name="sort"
            /></label>
            <label :class="{ 'bg-[#F2F0F9]': sort_value === 'email' }" for="email"
              >Email <input id="email" v-model="sort_value" type="radio" value="email" name="sort"
            /></label>
          </div>
        </div>

        <!-- Search -->
        <div class="search">
          <div>
            <svg
              class="w-4 h-4 text-[#8B83BA]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            v-model="searchTerm"
            id="default-search"
            @input="emit('updateSearchTerm', searchTerm)"
            placeholder="Search users by Name, Email or Date"
          />
        </div>
      </div>
      <!-- Pay Dues -->
      <button
        :disabled="payee.length === 0"
        :class="{ 'opacity-75': payee.length === 0 }"
        @click="markAsPaid"
        type="button"
        class="pay_btn"
      >
        PAY DUES
      </button>
    </div>

    <!-- Table -->
    <div class="users_table">
      <table class="w-full">
        <thead>
          <tr>
            <th>
              <input
                class="checkbox"
                type="checkbox"
                :checked="selectAll"
                @change="selectAllUsers"
              />
            </th>
            <th>NAME</th>
            <th>USER STATUS</th>
            <th>PAYMENT STATUS</th>
            <th>AMOUNT</th>
            <th class="text-[#F4F2FF]">ACTION</th>
            <th><i class="fas fa-ellipsis-v menu-icon"></i></th>
          </tr>
        </thead>

        <tbody class="table_body" v-for="(user, index) in users" :key="index">
          <tr :class="{ 'bg-[#D9D5EC]': expandedRow === index }">
            <td>
              <div class="flex items-center">
                <span class="mr-4">
                  <input
                    class="checkbox"
                    :checked="isSelected(user.id)"
                    @change="toggleSelection(user.id)"
                    type="checkbox"
                  />
                </span>
                <span>
                  <i v-if="expandedRow === index" class="fas fa-chevron-circle-up down-icon"></i>
                  <i v-else class="fas fa-chevron-circle-down down-icon"></i>
                </span>
              </div>
            </td>
            <td>
              <p class="user_name">{{ user.first_name }} {{ user.last_name }}</p>
              <p>{{ user.email }}</p>
            </td>
            <td>
              <div
                class="status_badge"
                :class="{
                  'bg-lightinfo text-info': user.user_status === 'active',
                  ' bg-neutralgray': user.user_status === 'inactive'
                }"
              >
                <i class="fas fa-circle" :class="{ 'text-info': user.user_status === 'active' }"></i
                >{{ user.user_status }}
              </div>
              <p>Last login: {{ user.login }}</p>
            </td>
            <td>
              <div
                class="status_badge"
                :class="{
                  'bg-lightsuccess text-success': user.payment_status === 'paid',
                  'bg-lightdanger text-danger': user.payment_status === 'overdue',
                  'bg-lightwarning text-warning': user.payment_status === 'unpaid'
                }"
              >
                <i
                  class="fas fa-circle"
                  :class="{
                    'text-success': user.payment_status === 'paid',
                    'text-danger': user.payment_status === 'overdue',
                    'text-warning': user.payment_status === 'unpaid'
                  }"
                ></i
                >{{ user.payment_status }}
              </div>
              <p class="date">Paid on: {{ user.date }}</p>
            </td>
            <td class="text-center">
              <p class="amount">${{ user.amount }}</p>
              <p>USD</p>
            </td>
            <td>
              <div @click="toggleRow(index)" class="view_more">View more</div>
            </td>
            <td>
              <div><i class="fas fa-ellipsis-v menu-icon"></i></div>
            </td>
          </tr>
          <!-- Expanded row -->
          <tr
            :class="{ 'bg-[#D9D5EC]': expandedRow === index }"
            class="expanded-row-head"
            v-if="expandedRow === index"
          >
            <td></td>
            <td>DATE</td>
            <td>USER ACTIVITY</td>
            <td colspan="3">DETAIL <i class="fas fa-info-circle"></i></td>
            <td></td>
          </tr>
          <tr
            class="expanded-row-data bg-[#F4F2FF]"
            v-if="expandedRow === index"
            v-for="(activity, index) in user.activities"
            :key="index"
          >
            <td></td>
            <td>{{ activity.date }}</td>
            <td class="text-dark">
              {{ activity.activity }}
            </td>
            <td class="text-dark" colspan="3">
              {{ activity.details }}
            </td>
            <td></td>
          </tr>
          <!-- Empty user activities -->
          <tr
            v-if="expandedRow === index && user.activities?.length <= 0"
            class="h-20 bg-[#F4F2FF]"
          >
            <td colspan="7" class="text-center font-intermedium">NO RECORDS FOUND</td>
          </tr>
        </tbody>
      </table>

      <!-- Empty table -->
      <div v-if="users.length === 0" class="empty-state">NO RECORDS FOUND</div>

      <!--Table Footer -->
      <div class="table_footer">
        <div class="footer-items-wrapper">
          <div>
            <span>Rows per page:</span>
            <select name="" id="">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">50</option>
              <option value="">100</option>
            </select>
          </div>

          <p v-if="users?.length > 1">1 to {{ users?.length }} of {{ users?.length }}</p>
          <p v-else-if="users?.length === 1">1 of {{ users?.length }}</p>
          <p v-else>0 of {{ users?.length }}</p>

          <div>
            <i class="fas fa-chevron-left"></i>
          </div>
          <div>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.users_table table .table_body tr td:nth-child(1) {
  width: 10%;
}
.users_table table .table_body tr td:nth-child(2) {
  width: 20%;
}
.users_table table .table_body tr td:nth-child(3) {
  width: 30%;
}
</style>
