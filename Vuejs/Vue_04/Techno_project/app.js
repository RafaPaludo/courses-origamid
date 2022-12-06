const vm = new Vue({
    el: '#app',
    data: {
        store: 'Techno',
        message: 'Hello World',
        products: [],
        selectedProduct: {},
        showModal: false,
        productAdded: false,
        stockControl: [],
        cart: [],
        cartModalOpen: false
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
        }, 
        showModalCartAdded () {
            setTimeout( () => this.productAdded = true, 500)
            setTimeout( () => this.productAdded = false, 3000)
        },
        closeCartModal() {
            this.cartModalOpen = false
        },
        openCartModal() {
            this.cartModalOpen = true
        },
        finish () {
            window.alert('Finalizado')
        },
        addProductToCart () {
            const { id, nome, preco, estoque } = this.selectedProduct
            const hasStock = this.checkStock(id, estoque)
            this.cart.push({ id, nome, preco, estoque })
            this.stockControl.push({ id, nome, preco, estoque })
            console.log(this.cart)
        },
        checkStock (id, estoque) {
            const stock = this.stockControl.filter( prod => prod.id === this.selectedProduct.id)
            if(stock){
                this.stockControl--
                return true
            }
            console.log(stock)
        },
    },
    created () {
        this.fetchProducts()
    }
})