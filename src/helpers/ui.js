/**
 * @param {string} selector Query selector for the desired element
 * @param {boolean} all
 */
export default function $(selector, all = false) {
  if (all) {
    const elements = document.querySelectorAll(selector)
    return elements
  }

  const element = document.querySelector(selector)
  return element
}

/**
 * @param {Product} product
 */
export function createProductCard(product) {
  const formatPrice = price => price.toFixed(2).replace('.', ',')

  const HTMLElement = `
  <div class="product-card">
    <div class="product-image">
      <img
        src="https://${product.image}"
        alt="${product.name}"
      />
    </div>
    <div class="product-info">
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
  </div>
  `

  return HTMLElement
}
