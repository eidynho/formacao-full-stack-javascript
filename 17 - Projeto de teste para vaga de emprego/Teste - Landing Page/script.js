
const productWrapper = document.querySelector('.products-wrapper')

const imgProduct = document.querySelectorAll('.product-image')
const nameProduct = document.querySelectorAll('.name-product')
const descriptionProduct = document.querySelectorAll('.description-product')
const previousPrice = document.querySelectorAll('.previous-price')
const currentPrice = document.querySelectorAll('.current-price')
const installmentPrice = document.querySelectorAll('.installment-price')

const btnMoreProducts = document.querySelector('.btn-more-products')

let page = 1

function jsonTransform(response) {
    return response.json()
}

/* function to request API of products and transform to JSON */

async function addProducts() {
    const dados = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
        .then(jsonTransform)

        return dados
}

addProducts()

/* function to show the products */

async function showProducts() {
    const products = await addProducts()

    products.products.forEach((product) => {
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
        
      productWrapper.appendChild(productEl)
    })
    page++
}

showProducts()
btnMoreProducts.addEventListener('click', showProducts)
