import HikeModel from "./HikeModel.js"
import HikesView from "./HikesView.js"

class HikesController {
  constructor() {
    this.hikeModel = new HikeModel()
    this.hikesView = new HikesView()
  }

  showHikeList() {
    const hikeListElement = document.getElementById("hikes")
    hikeListElement.innerHTML = ""
    this.hikesView.renderHikeList(hikeListElement, this.hikeModel.getAllHikes())
  }

  //on load grab the array and insert it into the page
  addHikeEventListener() {
    window.addEventListener("load", () => {
      myHike.showHikeList()
    })
  }
}

export default HikesController
