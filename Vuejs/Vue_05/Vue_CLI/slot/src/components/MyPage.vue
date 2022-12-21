<template>
  <!-- Podemos criar slots nomeados, aquele que não tiver será o default. para acessar basta usar v-slot:nomeSlot -->
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
footer {
  grid-column: 1/3;
}
</style>
