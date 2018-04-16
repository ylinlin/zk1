var gulp=require("gulp")
var server=require("gulp-webserver")
var htmlmin=require("gulp-htmlmin")
var sass=require("gulp-sass")
var uglify=require("gulp-uglify")
var cleanCss=require("gulp-clean-css")

gulp.task("ser",function(){
	gulp.src("/src")
	.pipe(server({
		host:"localhost",
		port:8090,
		open:true,
		liveraload:true,
		fallback:"index.html"
	}))
})

gulp.task("default",["ser"])