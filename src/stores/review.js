import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

const REST_REVIEW_API = `http://localhost:8080/api-review/review/`

export const useReviewStore = defineStore('Review', () => {

  const ReviewList = ref([]);
  const Review = ref();

  const getReviewList = function (id) {
    axios.get(REST_REVIEW_API+'list/'+id)
    .then((res)=>{
      ReviewList.value = res.data;
    })
  }

  const getReview = function (id) {
    axios.get(REST_REVIEW_API+id)
    .then((res)=>{
      Review.value = res.data;
    })
  }

  const registReview = function (review) {
      axios({
        url: REST_REVIEW_API,
        method: 'POST',
        params : review
      })
        .then(() => {
          alert("작성되었습니다.");
          router.go(-1);
        })
        .catch((err) => {
        console.log(err);
      })
    }

    const modifyReview = function (review) {
      axios({
        url: REST_REVIEW_API,
        method: 'PUT',
        params : JSON.parse(JSON.stringify(review))
        // data : {
        //   review
        // }
      })
        .then(() => {
          alert("수정되었습니다.");
          router.push('/');
        })
        .catch((err) => {
        console.log(err);
      })
    }

    const deleteReview = function (id) {
      axios({
        url: REST_REVIEW_API+id.id,
        method: 'DELETE',
        params : id
      })
        .then(() => {
          alert("리뷰가 삭제되었습니다.");
          router.push('/');
        })
        .catch((err) => {
        console.log(err);
      })
    }

  const reviewCnt = computed(()=>{
    return ReviewList.value.length;
  })



  return { Review, ReviewList, getReviewList, reviewCnt, getReview, registReview, deleteReview, modifyReview }
}, {persist:true})
