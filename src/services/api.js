async function makeRequest(url, options) {
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}

const API = {
  async get(url, headers) {
    const data = await makeRequest(url, {
      method: 'GET',
      headers,
    })

    return data
  },
}

export default API
