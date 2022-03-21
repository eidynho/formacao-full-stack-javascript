const Main = {
    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {
        this.$productWrapper = document.querySelector('.products-wrapper')
        this.$btnMoreProducts = document.querySelector('.btn-more-products')
    },

    bindEvents: function() {
        const self = this

        window.onload = self.Events.showProducts_API.bind(this)
        this.$btnMoreProducts.onclick = self.Events.showProducts_API.bind(this)
    },

    page: 1,

    Events: {
        showProducts_API: async function showProducts() {
            /* request API of products and show data */
            await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${this.page}`)
            .then(response => response.json())
            .then(data => data.products.forEach((product) => {
                const productEl = document.createElement('div')
        
                productEl.classList.add('product')
                productEl.innerHTML = `
                    <div class="img-wrapper">
                        <div class="img-product">
                            <img src="${product.image}" alt="product-image" class="product-image">
                        </div>
                    </div>
                    <div class="info-product">
                        <h3 class="name-product">${product.name}</h3>
                        <p class="description-product">${product.description}</p>
                        <span class="previous-price">R$ ${product.oldPrice}</span>
                        <p class="current-price">Por: R$ ${product.price}</p>
                        <span class="installment-price">ou 2x de ${product.price/2}</span>
                        <button class="btn-buy">Comprar</button>
                    </div>
                `
                this.$productWrapper.appendChild(productEl)
            }))
            this.page++
        }
    }
}

Main.init()
