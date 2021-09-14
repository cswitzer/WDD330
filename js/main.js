const links = [
  {
    label: "Week01 Notes",
    url: "week1/index.html",
  },
  {
    label: "Week02 Notes",
    url: "week2/index.html",
  },
  {
    label: "Week03 Notes",
    url: "week3/index.html",
  },
  {
    label: "Week04 Notes",
    url: "week4/index.html",
  },
  {
    label: "Week05 Notes",
    url: "week5/index.html",
  },
  {
    label: "Week06 Notes",
    url: "week6/index.html",
  },
  {
    label: "Week07 Notes",
    url: "week7/index.html",
  },
  {
    label: "Week08 Notes",
    url: "week8/index.html",
  },
  {
    label: "Week09 Notes",
    url: "week9/index.html",
  },
  {
    label: "Week10 Notes",
    url: "week10/index.html",
  },
  {
    label: "Week11 Notes",
    url: "week11/index.html",
  },
  {
    label: "Week12 Notes",
    url: "week12/index.html",
  },
]

const populateContents = () => {
  const contentsList = document.querySelector(".contents")

  links.map((link) => {
    const newLI = document.createElement("li")
    const a = document.createElement("a")

    a.textContent = link.label
    a.setAttribute("href", link.url)

    newLI.appendChild(a)

    contentsList.appendChild(newLI)
  })
}

populateContents()
