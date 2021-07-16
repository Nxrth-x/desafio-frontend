import $, { createProductCard } from './helpers/ui.js'
import { getProducts } from './helpers/requests.js'

async function handleRenderProducts() {
  const productsContainer = $('.products')

  console.log(productsContainer)

  const data = await getProducts()
  const products = data.products.slice(0, 2)

  products.forEach(product => {
    productsContainer.innerHTML += createProductCard(product)
  })
}

handleRenderProducts()
