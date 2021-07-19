import API from '../services/api'
import './typedef'

/**
 *
 * @param {string} page
 * @returns {ProductAPIResponse} API response for the products endpoint
 */
export async function getProducts(page = 1) {
  const { data } = await API.get(`/products?page=${page}`)

  return data
}
