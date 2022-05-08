import axios from 'axios';
axios.defaults.proxy = "http://localhost:3001"
const API = {
  signup: async (creds) => {
    try {
      const res = await axios.post(`/api/signup`, creds)
      return res
    }
    catch (error) {
      console.log(error)
    }
  },

  logout: async () => {
    try {
      const res = await axios.get(`/api/logout`)
      return res
    }
    catch (error) {
      console.log(error)
    }
  },

  login: async (creds) => {
    try {
      const res = await axios.post(`/api/login`, creds)
      console.log(res)
      return res
    }
    catch (error) {
      console.log(error)
    }
  },

  check_status: async () => {
    try {
      const res = await axios.get("/api/user_data")
      console.log(res)
      return res
    }
    catch (error) {
      console.log(error)
    }
  },
  // get_one_user: async (username) => {
  //   try {
  //     const res = await axios.post(`/api/users/`, username)
  //     console.log(res)
  //     return res
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }
}


export default API;
