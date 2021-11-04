function drawBox() {
  let canvas = document.getElementById("myCanvas")

  // set the context of where canvas drawings are rendered
  let context = canvas.getContext("2d")

  // saturate the brush comes before painting
  context.strokeStyle = "red"
  context.fillStyle = "rgba(0, 0, 255, 0.5)"

  // fill canvas in with rectangle (dimensions of canvas are 200x200)
  context.fillRect(10, 10, 100, 100)
  context.strokeRect(10, 10, 100, 100)
}

function drawPattern() {
  let canvas = document.getElementById("myCanvas")
  let context = canvas.getContext("2d")
  context.strokeStyle = "red"

  let img = new Image()
  img.src = "./Triangle.png"
  img.onload = () => {
    let pattern = context.createPattern(img, "repeat")
    context.fillStyle = pattern
    context.fillRect(10, 10, 100, 100)
    context.strokeRect(10, 10, 100, 100)
  }
}

const drawGradient = () => {
  let canvas = document.getElementById("myCanvas")
  let context = canvas.getContext("2d")
  context.strokeStyle = "red"

  // create a linear gradient
  let gradient = context.createLinearGradient(0, 0, 0, 200)
  gradient.addColorStop(0, "blue")
  gradient.addColorStop(1, "white")
  context.fillStyle = gradient
  context.fillRect(10, 10, 100, 100)
  context.strokeRect(10, 10, 100, 100)
}

const drawCircles = () => {
  let canvas = document.getElementById("myCanvas")
  let context = canvas.getContext("2d")

  // begin the path of what you want to draw
  context.beginPath()
  context.arc(50, 50, 40, 0, Math.PI * 2, true)
  context.closePath()

  context.strokeStyle = "red"
  context.fillStyle = "blue"
  context.lineWidth = 3

  // lastly, like with the rectangles, we fill and stroke
  context.fill()
  context.stroke()
}

const drawImgToCanvas = () => {
  let canvas = document.getElementById("myCanvas")
  let context = canvas.getContext("2d")
  let image = document.querySelector("#triangle")

  // here is where we draw the image
  context.drawImage(image, 0, 0)
}

// we can use the same code to convert a canvas video to grayscale
function manipulateImg() {
  let canvas = document.getElementById("myCanvas")
  let context = canvas.getContext("2d")
  let image = document.getElementById("triangle")
  context.drawImage(image, 0, 0)

  // Here is when the manipulation happens
  let imageData = context.getImageData(0, 0, 200, 200)
  for (let i = 0; i < imageData.data.length; i += 4) {
    // increment by += 4 because each pixel takes four values from imageData
    let red = imageData.data[i]
    let green = imageData.data[i + 1]
    let blue = imageData.data[i + 2]

    // convert all colors to greyscale using the greyscale mathematical formula
    let greyscale = red * 0.3 + green * 0.59 + blue * 0.11

    imageData.data[i] = greyscale
    imageData.data[i + 1] = greyscale
    imageData.data[i + 2] = greyscale
  }

  // put image data back into the canvas!
  context.putImageData(imageData, 0, 0)
}

window.addEventListener("load", manipulateImg, false)

// drawing in 3D uses canvas and webgl
