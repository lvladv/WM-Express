var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var autoprefixer = require("gulp-autoprefixer");
var uncss = require("gulp-uncss");

gulp.task("browser-sync", function(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    notify: false
  });

  browserSync.watch("./").on("change", browserSync.reload);

  done();
});

gulp.task("sass", function(done) {
  gulp
    .src("./src/sass/*.scss")
    .pipe(sass({ errLogToConsole: true }))
    .pipe(sass({ outputStyle: "compact" }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 versions"],
        cascade: false
      })
    )
        .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.reload({ stream: true }));

  done();
});

gulp.task(
  "watch",
  gulp.series("sass", "browser-sync", function(done) {
    gulp.watch("./src/sass/*.scss", gulp.series("sass"));
    gulp.watch("./*.html").on("change", browserSync.reload);

    done();
  })
);
