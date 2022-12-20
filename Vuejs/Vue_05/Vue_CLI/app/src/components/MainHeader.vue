<template>
  <header class="hello">
    <div>Logo</div>
    <ul>
      <li>Home</li>
      <li>Trabalhos</li>
      <li>Contato</li>
    </ul>
    <MainButton />
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
