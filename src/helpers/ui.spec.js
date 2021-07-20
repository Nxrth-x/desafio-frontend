import { createProductCard } from './ui'
import './typedef'

describe('Tests the UI helper functions', () => {
  /**
   * @type {Product}
   */
  const product = {
    description: 'Something',
    id: 1,
    name: 'Product 1',
    oldPrice: 12.99,
    price: 10.99,
    image: 'image.com',
    installments: {
      count: 1,
      value: 10.99,
    },
  }

  test('Should return a string representation of the HTML element', () => {
    const productCard = createProductCard(product)

    expect(typeof productCard).toBe('string')
  })

  test('Should return the exact representation of the described HTML element', () => {
    const productCard = createProductCard(product)

    expect(productCard).toBe(`
  <div class="product-card">
    <div class="product-image">
      <img
        src="https://image.com"
        alt="Product 1"
      />
    </div>
    <div class="product-info">
      <h2>Product 1</h2>
      <p class="description">
      Something
      </p>
      <p><span>De:</span> R$ 12,99</p>
      <p class="price"><b>Por: R$ 10,99</b></p>
      <p><span>ou 1x de R$ 10,99</span></p>
        <button>Comprar</button>
    </div>
  </div>
  `)
  })
})
