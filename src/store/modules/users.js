export default {
  namespaced: true,
  state: {
    data: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
    default_users: [],
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
      state.users = state.users_data.filter((item) => {
        const first_nameMatch = item.first_name.toLowerCase().includes(keyword.toLowerCase())
        const last_nameMatch = item.last_name.toLowerCase().includes(keyword.toLowerCase())
        const emailMatch = item.email.toLowerCase().includes(keyword.toLowerCase())

        return first_nameMatch || emailMatch || last_nameMatch
      })
    },
    SET_TOTAL_AMOUNT(state) {
      let total = 0
      for (let i = 0; i < state.users.length; i++) {
        const user = state.users[i]
        if (user.payment_status === 'unpaid' || user.payment_status === 'overdue') {
          total += user.amount
        }
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
    },
    SET_PAID_STATUS(state, data) {
      data.forEach((selectedUserId) => {
        state.users
          .filter((user) => user.id === selectedUserId && user.payment_status === 'unpaid')
          .forEach((user) => {
            user.payment_status = 'paid'
          })
      })
    },
    RESET_USERS(state) {
      state.users = [...state.default_users]
    }
  },
  actions: {
    getUsersData({ commit, state }, { status, keyword }) {
      commit('SET_USERS_DATA', status)
      commit('SET_USERS', keyword)
      commit('SET_TOTAL_AMOUNT')

      state.default_users = JSON.parse(JSON.stringify(state.users))
    },
    filterUsers({ commit, state }, keyword) {
      commit('SET_USERS', keyword)
      commit('SET_TOTAL_AMOUNT')

      state.default_users = JSON.parse(JSON.stringify(state.users))
    },
    markAsPaid({ commit }, data) {
      commit('SET_PAID_STATUS', data)
    }
  },
  getters: {
    users: (state) => state.users,
    total_amount: (state) => state.total_amount
  }
}
