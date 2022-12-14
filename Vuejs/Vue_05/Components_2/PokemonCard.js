export default {
    name: 'PokemonCard',
    template: `
        <div
            class="card_wrapper"
            v-if="pokemon"
        >
            <div class="card_name">
                {{ pokemon.name }}
            </div>

            <div class="card_img">
                <img :src="sanitizedImg('front_default')" :alt="pokemon.name" class="card_img_front">
                <img :src="sanitizedImg('back_default')" :alt="pokemon.name" class="card_img_back">
            </div>

            <div class="card_types">
                <div
                    v-for="{ type} in pokemon.types"
                    class="card_type"
                >
                    {{ type.name }}
                </div>
            </div>
        </div>
    `,
    data () {
        return {
            pokemon: ''
        }
    },
    methods: {
        generateID () {
            return Math.floor(Math.random() * 905)
        },
        fetchPokemon () {
            const pokemonID = this.generateID()

            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
                .then( r => r.json() )
                .then( r => this.pokemon = r  )
                .catch( err => console.error('Api não retornou o pokemon, erro: ', err ) )
            
        },
        sanitizedImg (spriteType) {
            return this.pokemon.sprites[spriteType]
        }
    },
    created () {
        this.fetchPokemon()
    }
}

// Retorna dados de um pokemon:: https://pokeapi.co/api/v2/pokemon/{ ID or NAME }
// API:: https://pokeapi.co/docs/v2#pokemon
