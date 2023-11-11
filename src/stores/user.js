import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

const REST_USER_API = `http://localhost:8080/api-user/`

export const useUserStore = defineStore('User', () => {
  const User = ref('');
  const loginUser = function (user) {
    axios({
      url: REST_USER_API + "login",
      method: 'POST',
      data : {
        id:user.id,
        password : user.password
      }
    })
    .then((res)=>{
        User.value = res.data;
        router.push({ name: 'home'})
    }).catch((err) => {
      console.log(err)
      alert('로그인 실패');
    })
  }

  const registUser = function (user) {
    
    axios({
      url: REST_USER_API + "signup",
      method: 'POST',
      data : user
    })
      .then(() => {
        alert("회원가입이 완료되었습니다.");
        router.push({ name: 'login'})
      })
      .catch((err) => {
      console.log(err)
    })
  }

  const updateUser = function(user){
    axios({
      url: REST_USER_API,
      method: 'PUT',
      params : JSON.parse(JSON.stringify(user))
    })
      .then(() => {
        ㅕ  
        alert("정보가 수정되었습니다.");
        router.push('/');
      })
      .catch((err) => {
      console.log(err);
    })
  }

  const dropOutUser = function(id){
    axios({
      url: REST_USER_API+id,
      method: 'DELETE',
      params : id
    })
      .then(() => {
        User.value = '';
        alert("영원히 탈퇴 되었습니다.");
        router.push('/');
      })
      .catch((err) => {
      console.log(err);
    })
  }

  const logout = function (){
    User.value = '';
    alert('안녕히 가세요!');
  }

  return { User, registUser, loginUser,updateUser, dropOutUser,logout }
}, {persist:true})
