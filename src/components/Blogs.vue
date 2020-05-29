<template>
  <div>
    <h3>{{ blogTitle }}</h3>
    <button @click="changeTitle">Change Title</button>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  methods: {
    changeTitle() {
      this.blogTitle = "Changed";
    },
  },
  data() {
    return {
      blogTitle: "Blogs",
    };
  },
  //   lifecycle hooks
  // before anything actually create
  beforeCreate() {
    alert("beforeCreate hook");
  },
  // on create dom
  created() {
    alert("created hook");
  },
  // before event fire
  beforeUpdate() {
    alert("beforeUpdate hook");
  },
};
</script>

<style></style>
