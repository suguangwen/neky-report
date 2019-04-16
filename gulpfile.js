var gulp = require("gulp");
var babel = require("gulp-babel");    // 用于ES6转化ES5
var uglify = require('gulp-uglify'); // 用于压缩 JS

// ES6转化为ES5
// 在命令行使用 gulp toes5 启动此任务
gulp.task("default", function () {
  return gulp.src("src/*.js")// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(uglify())
    .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
});
