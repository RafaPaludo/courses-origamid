<template>
  <div id="app">
    <nav>
      <ul>
        <li 
          v-for="menu in menuItems"
          :key="menu"
          @click="changeTab"
        >
          {{ menu }}
        </li>
      </ul>
    </nav>
    
    <keep-alive>
      <component :is="activetab"></component>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // Para importar componentes assincronos, basta usar a função import() do Webpack para retornar o componente desejado!
    MyHome: () => import('./components/MyHome.vue'),
    MyServices: () => import('./components/MyServices.vue')
  },
  data () {
    return {
      menuItems: ['MyHome', 'MyServices','MyContact'],
      activetab: ''
    }
  },
  methods: {
    changeTab (el) {
      this.activetab = el.target.innerText.trim()
    }
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

ul {
  padding: 0;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

li {
  cursor: pointer;
  list-style: none;
  padding: 1rem;
  border: 1px solid;
  border-radius: 4px;
  background-color: #42b983;
  color: #fff;
}

li:hover {
  opacity: .8;
}

</style>
