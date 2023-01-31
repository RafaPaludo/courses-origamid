export default {
    data () {
        return {
            api: null,
            loading: true
        }
    },
    methods: {
        fetchData (endpoint) {
            this.loading = true

            fetch(`http://localhost:3000${endpoint}`)
                .then( r => r.json() )
                .then( r => {
                    setTimeout( () => {
                        this.loading = false
                        this.api = r
                    }, 1000)
                } )
        }
    }
}