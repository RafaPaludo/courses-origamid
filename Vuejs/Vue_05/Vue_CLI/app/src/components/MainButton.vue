<template>
  <button
    class="button" 
    @click="reloadPage"
  >
    Reload ↻
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  methods: {
    reloadPage() {
      location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  background: #42b983;
  border-radius: 4px;
  color: #fff;
  border: #fff;
  padding: 10px;
  font-weight: 700;
  cursor: pointer;
}
</style>
