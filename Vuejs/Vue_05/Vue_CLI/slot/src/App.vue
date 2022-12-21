<template>
  <div id="app">
    <MyPage>
      <template v-slot:header>
        <h1>Título da página</h1>
      </template>

      <template>
        <MyArticle v-for="num in 4" :key="num">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, est architecto. Maxime doloremque illo temporibus, dolor odit eaque sed, qui quibusdam accusantium enim voluptatum maiores rerum eligendi dolores nisi? Sunt.
      </MyArticle>
      </template>

      <template v-slot:footer>
        <p>Footer da página</p>
      </template>
    </MyPage>

    <MyArticle>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, est architecto. Maxime doloremque illo temporibus, dolor odit eaque sed, qui quibusdam accusantium enim voluptatum maiores rerum eligendi dolores nisi? Sunt.
    </MyArticle>
  </div>
</template>

<script>
import MyArticle from './components/MyArticle.vue'
import MyPage from './components/MyPage.vue'

export default {
  name: 'App',
  components: {
    MyPage,
    MyArticle
  }
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
</style>
