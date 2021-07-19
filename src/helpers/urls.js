/**
 * Gets the URL 'query' parameters
 *
 * @param {string} url URL to get the query parameters from
 * @returns
 */
export const getURLQueryParameters = url => {
  const parsedURL = new URL(url)
  const parameters = new URLSearchParams(parsedURL.search)

  return parameters
}
