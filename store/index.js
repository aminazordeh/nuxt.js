export const state = () => ({
  user: {
    email: '',
    password: '',
    token: '',
  },
  userInfo: {},
})

export const mutations = {
  setUser(state, user) {
    state.user.email = user.email
    state.user.password = user.password
    state.user.token = user.token
    if (user.remember_me == true) {
      localStorage.setItem(
        'saved__user',
        JSON.stringify({
          email: user.email,
          password: user.password,
          token: user.token,
        })
      )
    } else {
      localStorage.removeItem('saved__user')
    }
  },
}
