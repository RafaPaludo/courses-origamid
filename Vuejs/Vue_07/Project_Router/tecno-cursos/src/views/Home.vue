<template>
    <div class="container">
        <div v-if="loading">
            <TheLoading />
        </div>
        <div v-if="api" class="result">
            <div class="content">
                <h1>Sobre a {{api.titulo}}</h1>
                <p>{{api.descricao}}</p>
                <router-link to="/cursos" tag="button" class="btn">Cursos</router-link>
                <h2 class="reviews">Avaliações</h2>
                <ul>
                    <li v-for="avaliacao in api.avaliacoes" :key="avaliacao">
                        <div>{{avaliacao.nome}}</div>
                        <div>{{avaliacao.descricao}}</div>
                    </li>
                </ul>
            </div>
            <img src="@/assets/learn.jpg" alt="Aprender algo novo">
        </div>
    </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js"

export default {
    name: 'MyHome',
    mixins: [
        fetchData
    ],
    created () {
        this.fetchData('/home')
    }
}
</script>

<style scoped>

.btn {
    font-size: 1.2rem;
    color: white;
    background: #4b8;
    border-radius: 4px;
    padding: 20px 40px;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 2px rgba(0,0,0,.1);
}

</style>