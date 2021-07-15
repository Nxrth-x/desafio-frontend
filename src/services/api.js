export default async function API(url, data, headers) {
  const response = await fetch(url, {
    headers: {
      ...headers,
    },
    body: JSON.stringify(data),
  })

  const response = await response.json()
}
