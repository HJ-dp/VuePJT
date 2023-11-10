import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

const REST_USER_API = `http://localhost:8080/api-video/user`

export const useUserStore = defineStore('User', () => {
  const UserList = ref([]);
  const getUserList = function () {
    axios.get(REST_User_API)
    .then((res)=>{
        UserList.value = res.date
    })
  }

//   const getUser = function (){

//   }

  return { UserList, getUserList }
})
