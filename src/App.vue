<template>
  <div id="app">
    <h1>
      {{ title }}
    </h1>
    <NavBar />
    <!-- send parameters -->
    <AllFriends :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import AllFriends from "@/components/AllFriends";
import OnlineFriends from "@/components/OnlineFriends";

export default {
  name: "App",
  components: {
    NavBar,
    AllFriends,
    OnlineFriends,
    // alias
    // NavBar : NavBar
  },
  data() {
    return {
      title: "My first vue app, voooo :)",
      friends: [
        { name: "Mario", online: true },
        { name: "Luigi", online: false },
        { name: "Toad", online: true },
        { name: "Bambo", online: false },
      ],
    };
  },
  methods: {
    deleteFriend(payload) {
      console.log(payload);
      this.friends = this.friends.filter((friend) => {
        return friend.name !== payload.name;
      });
    },
  },
};
</script>

<style>
.h1 {
  color: #2c3e50;
  font-weight: normal;
  text-align: center;
}
</style>
