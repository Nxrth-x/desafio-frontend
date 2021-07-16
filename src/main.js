import API from './services/api.js'
import $ from './helpers/ui.js'
import { bindFunctionsToWindow } from './helpers/window.js'
import './helpers/typedef.js'

const UI_DATA = {
  currentURL:
    'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1',
  nextURL: null,
}

/**
 *
 * @param {string} page
 * @returns {ProductAPIResponse} API response for the products endpoint
 */
async function getProducts(
  page = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1',
) {
  const data = await API.get(page)

  return data
}

/**
 * @param {Product} product
 */
function createProductCard(product) {
  const formatPrice = price => price.toFixed(2).replace('.', ',')

  const HTMLElement = `
  <div class="product-card">
    <div>
      <img
        src="https://${product.image}"
        alt="${product.name}"
      />
    </div>
    <h2>${product.name}</h2>
    <p class="description">
      ${product.description}
    </p>
    <p><span>De:</span> R$ ${formatPrice(product.oldPrice)}</p>
    <p class="price"><b>Por: R$ ${formatPrice(product.price)}</b></p>
    <p><span>ou ${product.installments.count}x de R$ ${formatPrice(
    product.installments.value,
  )}</span></p>
    <button>Comprar</button>
  </div>
  `

  return HTMLElement
}

async function handleRenderProducts() {
  const data = await getProducts(UI_DATA.nextURL || UI_DATA.currentURL)

  UI_DATA.nextURL = `https://${data.nextPage}`

  const productsContainer = $('.products')

  data.products.forEach(product => {
    productsContainer.innerHTML =
      productsContainer.innerHTML + createProductCard(product)
  })
}

bindFunctionsToWindow([handleRenderProducts])

handleRenderProducts()
