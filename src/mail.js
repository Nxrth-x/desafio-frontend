import $, { createProductCard } from './helpers/ui'
import { getProducts } from './helpers/requests'

async function handleRenderProducts() {
  const productsContainer = $('.products')

  const data = await getProducts()
  const products = data.products.slice(0, 2)

  products.forEach(product => {
    productsContainer.innerHTML += createProductCard(product)
  })
}

window.onload = handleRenderProducts
