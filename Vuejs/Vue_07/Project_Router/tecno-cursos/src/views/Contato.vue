<template>
    <div>
        <div v-if="loading">
            <TheLoading />
        </div>
        <div v-if="api">
            <div class="container">
                <h1>{{api.titulo}}</h1>
                <p>{{api.descricao}}</p>
                <ul>
                    <li v-for="(value, key) in api.contato" :key="key+value">
                        <b>{{key | capitalize}}</b>: {{value}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js"

export default {
    name: 'MyContato',
    mixins: [
        fetchData
    ],
    filters: {
        capitalize (word) {
            const firstLetter = word.charAt(0)
            const remainingLetters = word.substring(1)
            return firstLetter.toUpperCase() + remainingLetters
        }
    },
    created () {
        this.fetchData('/contato')
    }
}
</script>

<style>

</style>