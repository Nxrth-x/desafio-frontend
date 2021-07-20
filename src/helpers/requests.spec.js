import { getProducts } from './requests'

describe('Tests the requests file', () => {
  it('Should return a data object with an array of products', async () => {
    const data = await getProducts()
    expect(data).toBeDefined()
    expect(data.products).toBeInstanceOf(Array)
    expect(data.products.length).toBeGreaterThan(0)
  })
})
