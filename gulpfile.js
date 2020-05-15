// 引入gulp模块
let gulp = require("gulp");
// 压缩HTML文件
let htmlmin = require("gulp-htmlmin");
// 压缩css
let cssmin = require("gulp-clean-css");
// 压缩js
let uglify = require("gulp-uglify");
// 合并文件
// let concat = require("gulp-concat");
// ES6转ES5
let babel = require("gulp-babel");
// 启动web服务器(请求和响应)
let connect = require("gulp-connect");

// 监听
gulp.task("watch",async()=>{
    // 压缩html
    gulp.watch("./*.html",async()=>{
        gulp.src("./*.html")
        .pipe(htmlmin({
            collapseWhitespace:true
        }))
        .pipe(gulp.dest("D:\\php"));
    });

    // 复制图片
    gulp.watch("./img/**/*",async()=>{
        gulp.src("./img/**/*")
        .pipe(gulp.dest("D:\\php\\img"));
    });
    // 压缩css
    gulp.watch("./css/**/*",async()=>{
        gulp.src("./css/**/*")
        .pipe(cssmin())
        .pipe(gulp.dest("D:\\php\\css"));
    });
    // ES6转ES5
    // 压缩js
    gulp.watch("./js/**/*",async()=>{
        gulp.src("./js/**/*")
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("D:\\php\\js"));
    });
})





























//搭建服务器
// gulp.task('server',function(){
//     connect.server({
//         root:'new-pro',//root:'根目录' 类似phpstudy的WWW目录
//         livereload:true
//     });
// });

// 压缩HTML文件
// gulp.task("htmlmin",async()=>{
//     gulp.src("./*.html")
//     .pipe(htmlmin({
//             collapseWhitespace:true,//压缩html
//             removeComments:true,//清除html注释
//             collapseBooleanAttributes:true,//省略布尔属性的值
//             removeEmptyAttributes:true,//清除所有空格作属性值
//             removeScriptTypeAttributes:true,//清除type="text/javascript"
//             removeStyleLinkTypeAttributes:true,//清除<link>的type="text/css"
//             minifyJS:true,//压缩页面JS
//             minifyCSS:true//压缩页面CSS
//     }))
//     .pipe(gulp.dest("D:\\php"));
// });

// 复制所有子文件   用**/*
// gulp.task("copyChildren",async()=>{
//     gulp.src("./css/**/*")
//     .pipe(gulp.dest("D:\\php\\css"));
// });


// 复制多个文件     用[]
// gulp.task("copyChoose",async()=>{
//     gulp.src(["./img/*.{jpg,png}","./css/**/*"])
//     .pipe(gulp.dest("D:\\php"));
// });

// 复制同时过滤文件     用!
// gulp.task("chooseCopyPic",async()=>{
//     gulp.src(["./img/*.{jpg,png}","!img/b1.jpg"])
//     .pipe(gulp.dest("D:\\php\\img"));
// });


// 合并文件
// gulp.task("merge",async()=>{
//     gulp.src(["./js/index.js","./js/goods.js"])
//     .pipe(concat("common.js"))
//     .pipe(gulp.dest("D:\\php\\js"));
// });

