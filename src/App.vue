<template>
  <div id="app">
    <div id="nav">
      <h2>Select your language</h2>
      <router-link to="/rs/videos">Videos RS</router-link> &nbsp;
      <router-link to="/en/videos">Videos EN</router-link> &nbsp;
      <!-- <router-link to="/">Home</router-link>  -->
    </div>
    <router-view v-bind:key="$route.fullPath"></router-view>
    
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
