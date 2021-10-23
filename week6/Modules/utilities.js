const parser = new DOMParser()

export default function htmlEncode(value) {
  const valueHTML = parser.parseFromString(value, "text/html")
  const html = valueHTML.documentElement.querySelector("body")
  let liHTML = html.children
  return liHTML
}
