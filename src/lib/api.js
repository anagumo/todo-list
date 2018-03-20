import { Platform } from 'react-native'

export const tasks = (method, body) => {
  const ipAddress = Platform.OS == 'android' ? 'your_ip_address' : 'localhost'

  const headers = new Headers()
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json')

  return fetch("http://"+ipAddress+":3000/items.json", {
    method: method,
    headers,
    body: JSON.stringify(body)
  })
  .then(response => response.json())
}
