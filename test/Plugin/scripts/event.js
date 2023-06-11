//========================================================================

/**
 * 预加载按钮btn0事件
 */
 window.onload = function () {
    var btn0 = document.getElementById('btn0');
    btn0.onclick = btnEvent0;
}
/**
 * button运行(测试用)
 */
function btnEvent0() {
    var btn0 = document.getElementById('btn0');
    if (btn0.innerText != "运行中...") {
        btn0.innerHTML = "运行中...";
        console.log("运行");
        //setInterval(,1000)

        /*
        while (true) {
            alert("测试");
            sleep(2000);
            if (btn0.innerText != "运行中...") break
        }*/
    }
    else {
        btn0.innerText = "运行";
        clearInterval();  //结束执行
        alert(document.getElementById("cname").value)
        console.log("结束");
    }
}
/*
function _click(cName) {
    var c = cName;
    var buttons = document.getElementByClassName(cName);
    buttons.click();
}*/

function sleep(n) {
    var start = new Date().getTime();
    //  console.log('休眠前：' + start);
    while (true) {
        if (new Date().getTime() - start > n) {
            break;
        }
    }
    // console.log('休眠后：' + new Date().getTime());
}
