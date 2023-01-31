<template>
    <div>
        <h1>Cursos</h1>
        <div v-if="loading">
            <TheLoading />
        </div>
        <div v-if="api">
            <div class="result">
                <h1>{{api.titulo}}</h1>
                <p>{{api.descricao}}</p>
                {{api}}
            </div>
        </div>
    </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js"

export default {
    name: 'MyCursos',
    mixins: [
        fetchData
    ],
    created () {
        this.fetchData('/cursos')
    }
}
</script>

<style>

</style>