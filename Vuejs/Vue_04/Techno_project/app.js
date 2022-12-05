const vm = new Vue({
    el: '#app',
    data: {
        store: 'Techno',
        message: 'Hello World',
        products: [],
        selectedProduct: {},
        showModal: false
    },
    methods: {
        fetchProducts () {
            fetch('./api/produtos.json')
                .then( r => r.json() )
                .then( r => this.products = r )
        },
        fetchFullProduct (id) {
            fetch(`./api/produtos/${id}/dados.json`)
                .then( r => r.json() )
                .then( r => this.selectedProduct = r )
        },
        openModal(id) {
            this.fetchFullProduct(id)
            this.showModal = true
        },
        closeModal() {
            this.showModal = false
        }
    },
    created () {
        this.fetchProducts()
    }
})