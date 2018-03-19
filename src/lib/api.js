

export const tasks = (method, body) => {
  const headers = new Headers()
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json')

  return fetch("your_base_url/items.json", {
    method: method,
    headers,
    body: JSON.stringify(body)
  })
  .then(response => response.json())
}
