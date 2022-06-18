import axios from 'axios';
axios.defaults.proxy = "http://localhost:3001"
const API = {
  signup: async (creds) => {
    try {
      const res = await axios.post(`/api/user/signup`, creds)
      return res
    }
    catch (error) {
      console.log(error)
    }
  },

  logout: async () => {
    try {
      const res = await axios.get(`/api/auth/logout`)
      return res
    }
    catch (error) {
      console.log(error)
    }
  },

  login: async (creds) => {
    try {
      const res = await axios.post(`/api/auth/login`, creds)
      return res
    }
    catch (error) {
      console.log(error)
    }
  },

  check_status: async () => {
    try {
      const res = await axios.get("/api/user/data")
      return res
    }
    catch (error) {
      console.log(error)
    }
  },
  send_email: async (email) => {
    try {
      const res = await axios.post(`/api/auth/forgot-password`, email)
      return res
    }
    catch (error) {
      console.log(error)
    }
  },
  validate_token: async (token) => {
    try {
      const res = await axios.post(`/api/auth/validate-token`, token)
      return res
    }
    catch (error) {
      console.log(error)
    }
  },
  update_password: async (creds) => {
    try {
      const res = await axios.post(`/api/auth/update-password`, creds)
      return res
    }
    catch (error) {
      console.log(error)
    }
  },
  get_one_user: async (username) => {
    try {
      const res = await axios.post(`/api/user/`, username)
      console.log(res)
      return res
    }
    catch (error) {
      console.log(error)
    }
  }
}


export default API;
