/**
 * @typedef Installment
 *
 * @property {number} count Amount of installments
 * @property {number} value Value of each installment
 *
 */

/**
 * @typedef Product
 *
 * @property {number} id Product ID
 * @property {string} name Product's name
 * @property {number} oldPrice Product's price with unapplied discount
 * @property {number} price Product's current price
 * @property {string} description Product's description
 *
 * @property {Installment} installments Product's installments
 *
 */

/**
 * @typedef ProductAPIResponse
 *
 * @property {Product[]} products List of all products
 * @property {string | null} nextPage Next page to get new products
 */
