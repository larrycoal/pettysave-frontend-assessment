<template>
  <div class="about">
    <div class="profile_wrapper">
      <img :src="getPhoto.thumbnailUrl" />
      <div>
        <h3>{{ getPost.author[0].name }}</h3>
        <p>@{{ getPost.author[0].username }}</p>
        <p>{{ getPost.author[0].email }}</p>
      </div>
      <div><button>Subscribe</button></div>
    </div>
    <div class="post_wrapper">
      <h3>{{ getPost.title }}</h3>
      <p>{{ getPost.body }}</p>
      <div class="icons">
        <span>
          <i class="fa fa-comment" aria-hidden="true"></i>
          {{ getPost.comment.length }}</span
        >
        <span> <i class="fa fa-thumbs-up" aria-hidden="true"></i> 10</span>
        <span> <i class="fa fa-share" aria-hidden="true"></i> 10</span>
      </div>
    </div>
    <div class="comment_wrapper">
      <div v-for="comment in getPost.comment" :key="comment.id" class="comment">
        <p>{{ comment.email }} commented</p>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Post",
  computed: mapGetters(["getPost", "getPhoto"]),
  methods: {
    ...mapActions(["fetchPost", "fetchPhoto"]),
  },
  created() {
    this.fetchPost(this.$route.params.id);
    this.fetchPhoto(Math.floor(Math.random() * 100));
  },
};
</script>
<style scoped>
.about {
  display: grid;
  grid-template-rows: auto;
  padding: 20px;
  background-color: white;
  width: 60vw;

  margin: 0 auto;
}
.profile_wrapper {
  display: flex;
  gap: 20px;
  height: fit-content;
  padding: 20px;
  border-bottom: 1px solid rgb(95, 92, 92);
  align-items: center;
}
img {
  border-radius: 50%;
}
button {
  padding: 10px;
  background-color: rgb(230, 15, 15);
  color: whitesmoke;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
h3,
p {
  margin: 0;
}
.post_wrapper{
  margin: 10px;
}
.post_wrapper h3{
  margin-bottom: 10px;
}
.comment_wrapper {
  height: 30vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: scroll;
}

.comment p:nth-child(1) {
  text-align: end;
  margin: 5px 10px;
  color: rgb(100, 100, 83);
}
.icons{
  padding: 10px;
  border-top: 1px solid rgb(88, 87, 87);
  border-bottom: 1px solid rgb(88, 87, 87);
  justify-content: flex-end;
  font-size: larger;
  display: flex;
  gap: 20px;
  margin: 10px 0px;
}
@media (max-width:500px) {
  .about{
    width: 100vw;
    padding: 2px;
  }
  .profile_wrapper{
    gap: 10px;
    padding: 2px;
  }
}
</style>