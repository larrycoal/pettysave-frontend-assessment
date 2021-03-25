<template>
  <div class="home_wrapper">
    <div class="post_wrapper">
      <div v-for="post in allPosts" :key="post.id" class="post">
        <router-link :to="{name:'Post',params:{id:post.id}}"
          ><h3>{{ post.title }}</h3></router-link
        >
        <p>{{ post.body }}</p>
        <span>Comments: {{post.comment.length}}</span> <span>Author:{{post.author[0].name}}</span>
        <span>Posted: 5h ago</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  computed: mapGetters(["allPosts"]),
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  created() {
    this.fetchPosts();
  },
};
</script>


<style scoped>
i {
  color: red;
  outline: black;
}
span {
  margin: 0 10px;
  font-weight: lighter;
  color: rgb(87, 83, 83);
}
.home_wrapper{
  min-height: 100%;
    overflow: scroll;
    }
.post_wrapper {
  background-color:white;
  margin: 0 auto;
  width: 60%;
  padding: 20px;
  border: 1px solid #d2dfec;
  box-shadow: 0px 0px 10px 2px rgb(0 0 0 /40%);
}
.post {
  padding: 10px;
  border-bottom: 1px solid rgb(197, 191, 191);
}
span{
  letter-spacing: 1px;
  }
.post p{
  letter-spacing: 2px;
  font-weight: lighter;
  line-height: 30px;
  }
  a{
    text-decoration: none;
    color: black;
  }
  h3{
    font-weight: 500;
  }
  @media (max-width:500px) {
    .post_wrapper{
      width: 100%;
      padding: 0px;
    }
  }
</style>