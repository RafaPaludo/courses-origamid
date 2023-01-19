<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>


<style>
*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: #fff;
}

a.router-link-exact-active {
  color: #4b8;
}

</style>
