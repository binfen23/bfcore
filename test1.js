"auto";
console.show();
//请求截图，用找图方法，第一个就要先写的请求截图代码，不然找图没法用
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}


let bimg = captureScreen()       //bimg就需截取手机屏幕。。意思就是截屏
let simg = images.read("/storage/emulated/0/Pictures/Screenshots/1.png");//括号里是图片地址。。
let p = findImage(bimg, simg);
if (p) {
    log("找到啦);
    log(p);

} else {
    log("没找到);
}
 
