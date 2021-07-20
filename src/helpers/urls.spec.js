import { getURLQueryParameters } from './urls'

describe('Tests the URLs file', () => {
  const url = 'https://api.com/products?name=Hello&price=500'

  test('Should be an instance of URLSearchParams', () => {
    const queryParams = getURLQueryParameters(url)

    expect(queryParams).toBeInstanceOf(URLSearchParams)
  })

  test('Should get an object with key "name" and value "Hello"', () => {
    const queryParams = getURLQueryParameters(url)

    expect(queryParams.get('name')).toBe('Hello')
  })

  test('Should get an object with key "price" and value "500"', () => {
    const queryParams = getURLQueryParameters(url)
    expect(queryParams.get('price')).toBe('500')
  })
})
