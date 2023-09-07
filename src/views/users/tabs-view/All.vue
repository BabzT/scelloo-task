<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, ref, watch } from 'vue'

const store = useStore()
const sort_value = ref('default')
const filter = ref(false)
const searchterm = ref('')
const payee = ref([])
const expandedRow = ref(null)

const toggleRow = (index) => {
  expandedRow.value = expandedRow.value === index ? null : index
}

watch(searchterm, (newValue) => {
  if (newValue !== '') {
    store.dispatch('users/filterUsers', newValue)
  } else {
    sort_value.value = 'default'
    getUsers()
  }
})
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
    status: 'all',
    keyword: searchterm.value
  }
  store.dispatch('users/getUsersData', data)
}

onMounted(() => {
  getUsers()
})
</script>

<template>
  <div class="table_wrapper">
    <div class="table_top">
      <div class="flex">
        <div class="filter">
          <button @click="toggleFilter" class="filter_btn">
            <i class="fas fa-filter"></i>Filter
          </button>
          <!-- Filter dropdown -->
          <div class="filter_dropdown" v-if="filter">
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
            v-model="searchterm"
            id="default-search"
            placeholder="Search users by Name, Email or Date"
          />
        </div>
      </div>
      <!-- Pay Dues -->
      <button @click="markAsPaid" type="button" class="pay_btn">PAY DUES</button>
    </div>

    <!-- Table -->
    <div class="users_table">
      <table class="w-full">
        <thead>
          <tr>
            <th><input class="checkbox" type="checkbox" name="" id="" /></th>
            <th>NAME</th>
            <th>USER STATUS</th>
            <th>PAYMENT STATUS</th>
            <th>AMOUNT</th>
            <th class="text-[#F4F2FF]">ACTION</th>
            <th><i class="fas fa-ellipsis-v menu-icon"></i></th>
          </tr>
        </thead>

        <tbody class="table_body" v-for="(user, index) in users" :key="index">
          <tr>
            <td>
              <div class="flex items-center">
                <span class="mr-4">
                  <input
                    class="checkbox"
                    v-model="payee"
                    :value="user.id"
                    type="checkbox"
                    :id="user.id"
                  />
                </span>
                <span @click="toggleRow(index)">
                  <i class="fas fa-chevron-circle-down down-icon"></i>
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
              <div class="view_more">View more</div>
            </td>
            <td>
              <div><i class="fas fa-ellipsis-v menu-icon"></i></div>
            </td>
          </tr>
          <tr v-if="expandedRow === index">
            <td></td>
            <td>DATE</td>
            <td>USER ACTIVITY</td>
            <td colspan="3">DETAIL</td>
            <td></td>
          </tr>
          <tr v-if="expandedRow === index">
            <td></td>
            <td>12/APR/2023</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.</td>
            <td colspan="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper
              morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.
            </td>
            <td></td>
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
