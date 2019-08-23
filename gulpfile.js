"use strict";

const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
const pug = require("gulp-pug");

sass.compiler = require("node-sass");

// Base Tasks
gulp.task("js", function() {
 return gulp
   .src("src/js/**/*.js")
   .pipe(
     babel({
       presets: ["@babel/env"]
     })
   )
   .pipe(gulp.dest("public"));
});

gulp.task("sass", function() {
 return gulp
   .src("src/sass/**/*.sass")
   .pipe(sass().on("error", sass.logError))
   .pipe(gulp.dest("public"));
});

gulp.task("pug", function() {
 return gulp
   .src("src/views/**/.pug")
   .pipe(pug())
   .pipe(gulp.dest("public"));
});

// Gulp Watch
gulp.task("watch:pug", function() {
 gulp.watch("src/views/**/*.pug", gulp.series("pug"));
});

gulp.task("watch:sass", function() {
 gulp.watch("src/sass/**/*.sass", gulp.series("sass"));
});

gulp.task("watch:js", function() {
 gulp.watch("src/js/**/*.js", gulp.series("js"));
});

// Master Function
gulp.task(
 "watch",
 gulp.parallel(
   "watch:pug",
   "watch:sass",
   "watch:js"
 )
);