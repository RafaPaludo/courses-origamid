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
        cartModalOpen: false
    },
    filters: {
        numtoToCurrency(price) {
            if(!price) {
                price = 0
            }
            return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'} )
        }
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
            
            if(fetchedProduct){
                this.actualProduct = fetchedProduct
            } else {
                this.fetchFullProduct(id)
            }

            this.showModal = true
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        closeModal({target, currentTarget}) {
            if(target !== currentTarget) return

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

            this.productAdded = true

            setTimeout( () => {
                this.productAdded = false
            }, 1500)
        },
        removeToCart(id) {
            const idxItemToRemove = this.cartControl.findIndex( item => item.id === id )
            const product = this.selectedProducts.find( product => product.id === id )
            
            product.estoque++
            this.cartControl.splice(idxItemToRemove, 1)
        }
    },
    created () {
        this.fetchProducts()
    },
    computed: {
        cartTotal() {
            const total = this.cartControl.reduce( (accumulator, currentProduct) => {
                return accumulator +  currentProduct.preco
            }, 0 )

            return total || 0
        }
    }
})