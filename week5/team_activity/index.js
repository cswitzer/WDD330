import HikesController from "./HikesController.js"

const hikesController = new HikesController()

window.addEventListener("load", () => {
  hikesController.showHikeList()
})
