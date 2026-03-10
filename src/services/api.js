import axios from "axios"

const api = axios.create({
  baseURL: "https://mini-travel-experience-listing-plat-omega.vercel.app/api",
  headers: {
    "Content-Type": "application/json"
  }
})

export default api