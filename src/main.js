import $, { createProductCard } from './helpers/ui.js'
import { getProducts } from './helpers/requests.js'
import { bindFunctionsToWindow } from './helpers/window.js'

/**
 * Stores the request URLs
 */
const REQUEST_DATA = {
  baseURL:
    'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1',
  nextURL: null,
}

/**
 * Makes a request to the products endpoint and renders
 * the products in the UI
 */
async function handleRenderProducts() {
  const data = await getProducts(REQUEST_DATA.nextURL || REQUEST_DATA.baseURL)

  REQUEST_DATA.nextURL = `https://${data.nextPage}`

  const productsContainer = $('.products')

  data.products.forEach(product => {
    productsContainer.innerHTML += createProductCard(product)
  })
}

bindFunctionsToWindow([handleRenderProducts])

handleRenderProducts()
