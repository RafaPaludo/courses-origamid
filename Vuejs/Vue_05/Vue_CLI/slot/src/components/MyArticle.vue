<template>
  <!-- Qualquer conteúdo dentro de MyArticle será renderizado no lugar de slot -->
  <article>
    <h1>Título do artigo</h1>
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: 'MyArticle',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
article {
  max-width: 700px;
}
</style>
