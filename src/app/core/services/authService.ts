import axios from 'axios'

const API_URL = 'http://localhost:3000'

export const authService = {
  async login(username: string, password: string) {
    const res = await axios.get(`${API_URL}/users`, {
      params: { user: username, password },
    })

    if (!res.data.length) {
      throw new Error('Неверный логин или пароль')
    }

    return res.data[0]
  },
}
