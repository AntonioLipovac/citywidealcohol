<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/citylogo.png"
          width="150"
          height="80"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/pivo" class="nav-link"
              >Pivo</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link"
              >Login
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link"
              >Signup</router-link
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
        <input v-model="store.searchTerm" class="form-control me-2" type="search" placeholder="Pretraga" aria-label="">
        <button class="btn btn-outline-success" type="submit">Pretraga</button>
      </form>
      </div>
    </nav>
{{store.searchTerm}}
    <div class="conainer">
      <router-view />
    </div>
  </div>
</template>

<script>
import store from"@/store";
import { firebase } from "@/firebase";

firebase.auth().onAuthStateChanged((user) => {
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
 
 console.log("*** User", user.email);
 store.currentUser = user.email;
 } 
 else {

 console.log('*** No user');
 if (router.name !== 'login') {
 router.push({ name: 'login' });
 };
};
});
});


export default {
  name:'app',
  data(){
    return {
      store,
    };
  },
};
</script>
-->
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: rgb(255, 255, 255) !important;

  a {
    font-weight: bold;
    color: #3a964f;

    &.router-link-exact-active {
      color: #000000;
    }
  }
}
</style>
