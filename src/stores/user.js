import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

const REST_USER_API = `http://localhost:8080/api-user/`

export const useUserStore = defineStore('User', () => {
  const User = ref();
  const loginUser = function (user) {
    console.log(user);
    axios.get({
      url: REST_USER_API + "login",
      method: 'POST',
      params : user
    })
    .then((res)=>{
        User.value = res.data
        // User.value = user;
    }).catch((err) => {
      console.log(err)
    })
  }

  const registUser = function (user) {
    
    axios({
      url: REST_USER_API + "signup",
      method: 'POST',
      params : user
    })
      .then(() => {
        alert("회원가입이 완료되었습니다.");
        router.push({ name: 'login'})
      })
      .catch((err) => {
      console.log(err)
    })
  }

  return { User, registUser, loginUser }
})
