// example 1:
const lyrics = "lalalala"

// the function we will callback to
const displaySong = (lyrics) => {
  console.log(lyrics)
}

// the function that takes in a callback function
const sing = (lyrics, callback) => {
  callback(lyrics)
}

// sing takes in a callback function (displaySong) and calls it to display the lyrics
sing(lyrics, displaySong)

// example 2: use an anonymous function
sing(lyrics, () => console.log(lyrics))
