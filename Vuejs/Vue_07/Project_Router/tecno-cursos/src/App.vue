<template>
  <div id="app">
    <TheHeader />
    <main>
      <router-view></router-view>
    </main>
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

main {
  max-width: 1000px;
  margin: 0 auto;
}

h1, h2 {
  color: #234;
  padding: 20px 0;
}

.container {
  padding: 20px;
}

.container p {
  padding: 10px 0;
}

.reviews {
  padding: 30px 0;
}

ul li div {
  padding: 10px 0;
}

.result {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
}

.result img {
  max-width: 400px;
}

@media screen and (max-width: 728px) {
  .result {
    display: block;
  }
}


</style>
