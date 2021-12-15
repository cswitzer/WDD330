// gulp is a nice file that browserifys all specified files given an entry point" app.js
// as long as app.js includes another file, that file will be able to use npm modules as well
const browserify = require("browserify")
const gulp = require("gulp")
const source = require("vinyl-source-stream")

gulp.task("js", () => {
  return browserify("./backend/public/src/app")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./backend/public/js/"))
})
