const baseURL = "http://127.0.0.1:3000/"

export const makeRequest = async (
  url,
  method = "GET",
  body = null,
  token = null
) => {
  let options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  }

  // stringify objects that are being uploaded to json server
  if (method == "POST" || method == "PUT") {
    options.body = JSON.stringify(body)
  }

  if (token) {
    options.headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(baseURL + url, options)
  const data = await response.json()

  if (!response.ok) {
    console.log(response)
    throw new Error(`${data.status}: ${data.message}`)
  } else {
    return data
  }
}
