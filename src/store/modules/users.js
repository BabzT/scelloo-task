export default {
  namespaced: true,
  state: {
    data: [
      {
        id: 1,
        first_name: 'Justin ',
        last_name: 'Septimus',
        email: 'septimus@gmail.com',
        user_status: 'active',
        payment_status: 'paid',
        amount: 200,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020',
        activities: []
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
        date: '15/APR/2020',
        activities: [
          {
            date: '12/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '12/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '08/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '04/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          }
        ]
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
        login: '12/APR/2020',
        date: '18/APR/2020',
        activities: []
      },
      {
        id: 4,
        first_name: 'Erin ',
        last_name: 'Levin',
        email: 'levin@gmail.com',
        user_status: 'active',
        payment_status: 'unpaid',
        amount: 200,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020',
        activities: [
          {
            date: '12/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '12/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '08/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '04/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          }
        ]
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
        login: '14/JUN/2020',
        date: '15/JUN/2020',
        activities: []
      },
      {
        id: 6,
        first_name: 'Jaxson ',
        last_name: 'Siphron',
        email: 'siphron@gmail.com',
        user_status: 'inactive',
        payment_status: 'paid',
        amount: 750,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020',
        activities: [
          {
            date: '12/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '12/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '08/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '04/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          }
        ]
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
        login: '09/SEP/2020',
        date: '05/SEP/2020',
        activities: []
      },
      {
        id: 8,
        first_name: 'Lincoln',
        last_name: 'Levin',
        email: 'lincoln@gmail.com',
        user_status: 'active',
        payment_status: 'paid',
        amount: 370,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020',
        activities: [
          {
            date: '12/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '12/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '08/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '04/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          }
        ]
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
        date: '15/APR/2020',
        activities: []
      },
      {
        id: 10,
        first_name: 'Cheyenne Ekstrom ',
        last_name: 'Bothman',
        email: 'bothman@gmail.com',
        user_status: 'inactive',
        payment_status: 'paid',
        amount: 150,
        currency: 'USD',
        login: '14/APR/2020',
        date: '15/APR/2020',
        activities: [
          {
            date: '12/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '12/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '08/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          },
          {
            date: '04/APR/2020',
            activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
            details:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu sempermorbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
          }
        ]
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
        const dateMatch = item.date.toLowerCase().includes(keyword.toLowerCase())
        const loginDateMatch = item.login.toLowerCase().includes(keyword.toLowerCase())

        return first_nameMatch || emailMatch || last_nameMatch || loginDateMatch || dateMatch
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
            state.total_amount -= user.amount
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
      if (status === 'all') {
        commit('SET_TOTAL_AMOUNT')
      }

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
