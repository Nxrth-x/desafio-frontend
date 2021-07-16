import API from '../services/api.js'
import './typedef.js'

/**
 *
 * @param {string} page
 * @returns {ProductAPIResponse} API response for the products endpoint
 */
export async function getProducts(
  page = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1',
) {
  const data = await API.get(page)

  return data
}
