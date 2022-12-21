<template>
  <div id="app">
    <h1>Logo</h1>
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/cursos">CURSOS</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  display: flex;
  justify-content: center;
}

a {
  color: #42b983;
  padding: 2rem;
}

.router-link-active {
  color: #2c3e50;
  padding: 2rem;
}
</style>
