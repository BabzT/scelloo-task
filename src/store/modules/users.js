export default {
  namespaced: true,
  state: {
    data: [
      {
        first_name: 'Justin ',
        last_name: 'Septimus',
        email: 'example@gmail.com',
        user_status: 'active',
        payment_status: 'paid',
        amount: 200,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020'
      },
      {
        first_name: 'Anika Rhiel ',
        last_name: 'Madsen',
        email: 'example@gmail.com',
        user_status: 'active',
        payment_status: 'overdue',
        amount: 300,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020'
      },
      {
        first_name: 'Miracle ',
        last_name: 'Vaccaro',
        email: 'example@gmail.com',
        user_status: 'active',
        payment_status: 'paid',
        amount: 250,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020'
      },
      {
        first_name: 'Erin ',
        last_name: 'Levin',
        email: 'example@gmail.com',
        user_status: 'active',
        payment_status: 'unpaid',
        amount: 200,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020'
      },
      {
        first_name: 'Mira ',
        last_name: 'Herwitz',
        email: 'example@gmail.com',
        user_status: 'inactive',
        payment_status: 'paid',
        amount: 200,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020'
      },
      {
        first_name: 'Jaxson ',
        last_name: 'Siphron',
        email: 'example@gmail.com',
        user_status: 'inactive',
        payment_status: 'paid',
        amount: 750,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020'
      },
      {
        first_name: 'Mira ',
        last_name: 'Levin',
        email: 'example@gmail.com',
        user_status: 'active',
        payment_status: 'unpaid',
        amount: 200,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020'
      },
      {
        first_name: 'Lincoln',
        last_name: 'Levin',
        email: 'example@gmail.com',
        user_status: 'active',
        payment_status: 'paid',
        amount: 370,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020'
      },
      {
        first_name: 'Philip ',
        last_name: 'Saris',
        email: 'example@gmail.com',
        user_status: 'inactive',
        payment_status: 'unpaid',
        amount: 200,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020'
      },
      {
        first_name: 'Cheyenne Ekstrom ',
        last_name: 'Bothman',
        email: 'example@gmail.com',
        user_status: 'inactive',
        payment_status: 'paid',
        amount: 150,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020'
      }
    ],
    users_data: [],
    users: [],
    total_amount: 0
  },

  mutations: {
    SET_USERS_DATA(state, status) {
      if (status === 'all') {
        state.users_data = state.data
      } else {
        state.users_data = state.data.filter((user) => user.payment_status === status)
      }
    },
    SET_USERS(state, keyword) {
      if (keyword === '') {
        state.users = state.users_data
      } else {
        state.users = state.users_data.filter((item) => {
          const first_nameMatch = item.first_name.toLowerCase().includes(keyword.toLowerCase())
          const last_nameMatch = item.last_name.toLowerCase().includes(keyword.toLowerCase())
          const emailMatch = item.email.toLowerCase().includes(keyword.toLowerCase())

          return first_nameMatch || emailMatch || last_nameMatch
        })
      }
    },
    SET_TOTAL_AMOUNT(state) {
      let total = 0
      for (let i = 0; i < state.users.length; i++) {
        const user = state.users[i]
        total += user.amount
      }
      state.total_amount = total
    },
    SORT_USERS(state, key) {
      state.users.sort((a, b) => {
        const valueA = a[key].toLowerCase()
        const valueB = b[key].toLowerCase()

        if (valueA < valueB) {
          return -1
        }
        if (valueA > valueB) {
          return 1
        }
        return 0
      })
    }
  },
  actions: {
    getUsersData({ commit }, { status, keyword }) {
      commit('SET_USERS_DATA', status)
      commit('SET_USERS', keyword)
      commit('SET_TOTAL_AMOUNT')
    },
    filterUsers({ commit }, keyword) {
      commit('SET_USERS', keyword)
      commit('SET_TOTAL_AMOUNT')
    }
  },
  getters: {
    users: (state) => state.users,
    total_amount: (state) => state.total_amount
  }
}
