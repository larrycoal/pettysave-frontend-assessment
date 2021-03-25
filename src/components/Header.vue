<template>
  <div class="header">
    <router-link to="/">
      <i class="fa fa-home" aria-hidden="true"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.header {
  background-color: rgba(44, 44, 44, 0.5);
  padding: 10px 40px;
  color: aliceblue;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
i{
  font-size: xx-large;
  color: whitesmoke;
}
</style>