const vm = new Vue({
    el: '#app',
    data: {
        store: 'Techno',
        products: [],
        selectedProducts: [],
        actualProduct: {},
        showModal: false,
        productAdded: false,
        cartControl: [],
        cart: [],
        cartTotal: 0,
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
                .then( r => {
                    this.actualProduct = r 
                    this.selectedProducts.push(r)
                })
        },
        openModal(id) {
            const fetchedProduct = this.selectedProducts.find( product => product.id === id )
            
            if(fetchedProduct && fetchedProduct.length){
                this.actualProduct = fetchedProduct
            } else {
                this.fetchFullProduct(id)
            }

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
        addProductToCart (id) {
            const product = this.selectedProducts.find( product => product.id === id )

            if(product.estoque) {
                product.estoque--
            }
            this.addToCart(product)
        },
        addToCart(product) {
            this.cartControl.push(product)
        }
    },
    created () {
        this.fetchProducts()
    },
    watch: {
        cartControl(totalProducts) {
            this.cartTotal = totalProducts.reduce( (accumulator, currentProduct) => {
                return accumulator +  currentProduct.preco
            }, 0 )
        }
    }
})