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
            <router-link to="/Jakaalkoholna pića" class="nav-link"
              >Jaka alkoholna pića
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/pivo" class="nav-link">Pivo </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vino" class="nav-link">Vino </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/onama" class="nav-link">O nama</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link">Signup</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="conainer">
      <router-view />
    </div>
    
  </div>
</template>

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
  background-color: rgb(250, 250, 250) !important;
 


  a {
    font-weight: bold;
    color: #3a964f;

    &.router-link-exact-active {
      color: #000000;
    }
  }
}

#footer {
  background-color: #ffffff;
  color: #000000;
  padding-top: 32px;
}
</style>
