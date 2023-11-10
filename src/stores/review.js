import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

const REST_REVIEW_API = `http://localhost:8080/api-review/review`

export const useReviewStore = defineStore('Review', () => {
  const ReviewList = ref([]);
  const getReviewList = function () {
    axios.get(REST_VIDEO_API)
    .then((res)=>{
      VideoList.value = res.data
    })
  }

//   const getReview = function () {

//   }

  return { ReviewList, getReviewList }
})