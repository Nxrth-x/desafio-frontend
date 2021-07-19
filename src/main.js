import $, { createProductCard } from './helpers/ui'
import { getProducts } from './helpers/requests'
import { bindFunctionsToWindow } from './helpers/window'
import { getURLQueryParameters } from './helpers/urls'
import './helpers/typedef'

/**
 * Stores the request URLs
 */
const REQUEST_DATA = {
  currentPage: 1,
  nextPage: null,
}

/**
 * Helper function to assign the next page URL to the global state
 *
 * @param {string} url Next page URL
 */
function assignNextPageURL(url) {
  const formattedURL = `https://${url}`
  const queryParameters = getURLQueryParameters(formattedURL)
  REQUEST_DATA.nextPage = queryParameters.get('page')
}

/**
 * Renders a list of products in the UI
 *
 * @param {Product[]} products Products to be rendered in the UI
 */
function renderProducts(products) {
  const productsContainer = $('.products')

  products.forEach(product => {
    productsContainer.innerHTML += createProductCard(product)
  })
}

/**
 * Makes a request to the products endpoint and renders
 * the products in the UI
 */
async function handleRenderProducts() {
  const data = await getProducts(
    REQUEST_DATA.nextPage || REQUEST_DATA.currentPage,
  )

  assignNextPageURL(data.nextPage)
  renderProducts(data.products)
}

// Adds an event listener to the button click to load more products
$('#load-products').addEventListener('click', handleRenderProducts)

handleRenderProducts()
