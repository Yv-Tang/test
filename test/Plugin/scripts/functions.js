/**
 * 预加载按钮btn事件
 */
window.onload = function () {
    var btn = document.getElementById('btn');
    btn.onclick = btnEvent;
}
/**
 * button运行状态
 */
function btnEvent() {
    var btn = document.getElementById('btn');
    if (btn.innerText == "运行") {
        btn.innerText = "运行中...";
        setInterval(click, 1000 * 60 * 5);  //开始循环
        console.log("运行");
    }
    else {
        btn.innerText = "运行";
        clearInterval();  //结束执行
        console.log("结束");
    }
}
function click() {
    var buttons = document.getElementByClassName("layui-layer-btn0");
    buttons.click();
}

