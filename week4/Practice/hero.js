const form = document.forms["hero"]

form.addEventListener("submit", validateFirstName, false)
form.addEventListener("submit", makeHero, false)

// form validation
function validateFirstName(e) {
  const firstLetter = form["heroName"].value[0]
  if (firstLetter.toUpperCase() === "X") {
    e.preventDefault()
    alert("Super hero name can't start with X")
  }
}

function makeHero(e) {
  e.preventDefault()

  const hero = {}
  hero.powers = []
  hero.category = []

  hero.name = form["heroName"].value
  hero.realName = form["realName"].value
  hero.age = form["age"].value
  hero.base = form["city"].value
  hero.origin = form["origin"].value

  // convert form.powers into an array
  hero.powers = [...form.powers]
    .filter((box) => box.checked)
    .map((checkedBox) => checkedBox.value)

  hero.category = form["category"].value

  alert(JSON.stringify(hero))
  return hero
}
