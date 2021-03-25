import { createStore } from "vuex";
import axios from 'axios'
const state = {
  posts:[],
  post:[],
  photo:{}
}
const actions = {
  async fetchPosts({commit}){
    try{
      const res = await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/comments"),
        axios.get("https://jsonplaceholder.typicode.com/users")
      ]);
      const data = res.map((res)=>{return res.data})
      let post = [...data[0]]
      let comment = [...data[1]]
      let user = [...data[2]]

      post.map((post)=>{
          post.comment = comment.filter(comment=>comment.postId === post.id)
          post.author = user.filter(user=>user.id===post.userId)
      })
      commit("setPosts",post)
    } catch{
      throw("promise failed")
    }   
  },
  fetchPost({commit},id){
       const {posts} =state
       let post = posts.filter(post => post.id === parseInt(id))
       console.log(post)
       commit("setPost",post)
  },
  async fetchPhoto ({commit},id=1){
    let photo = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    console.log(photo)
    commit("setPhoto",photo.data)
  }
}
const mutations = {
  setPosts:(state,post)=>(state.posts=post),
  setPost:(state,post)=>(state.post=post),
  setPhoto:(state,photo)=>(state.photo= photo)

}
const getters = {
  allPosts:state=>state.posts,
  getPost:state=>state.post[0],
  getPhoto: state=>state.photo
}
export default createStore({
  state,
  mutations,
  actions,
  getters
});
