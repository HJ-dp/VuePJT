import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

const REST_VIDEO_API = `http://localhost:8080/api-video/video`

export const useVideoStore = defineStore('Video', () => {
  const VideoList = ref([]);
  const Video = ref();
  const getVideoList = function () {
    axios.get(REST_VIDEO_API)
    .then((res)=>{
      VideoList.value = res
    })
  }
  const getVideo = function (id) {
    axios.get(REST_VIDEO_API+"/detail/"+id)
    .then((res)=>{
      Video.value = res.data
    })
  }

  const getPartVideo = function (part) {
    axios.get(REST_VIDEO_API+"/list/"+part)
    .then((res)=>{
      VideoList.value = res
    })
  }

  return { Video,VideoList, getVideoList, getVideo, getPartVideo }
})