// Copyright (c) 2012, lmmsoft@126.com 
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
// --------------------------------------------------------------------
// version 1.0
// home page:http://njust.aliapp.com/pingjiao/
// -------------------------------------------------------------------

//选择单选框0-4，-1为随机选择
var NAME = "p_pjdjdm";
function xuanze(t) {
    for (var i = 1; i <= 15; ++i) {
        var index = (t == -1) ? (Math.floor(Math.random() * 100) % 5) : t;
        var chooses = document.getElementsByName(NAME + i);
        if (chooses)
            chooses[index].checked = true;
    }
    return "xx";
}
//自动评语
function pinyu(value) {
    document.getElementsByName("p_jy")[0].value = value;
}

function info() {
    if (window.XMLHttpRequest) {
        xmlReq = new XMLHttpRequest();
        xmlReq.open("GET", "http://njust.aliapp.com/pingjiao/simple.php", true); //
        xmlReq.send(null);
        alert("感谢使用^_^");
    }
}

html = "<center>"
    + "<h3>自动选择</h3>"
    + "<input type='button' name='xuan' value='全部随机' />"
    + "<input type='button' name='xuan' value='全部非常同意'  />"
    + "<input type='button' name='xuan' value='全部同意' />"
    + "<input type='button' name='xuan' value='全部基本同意' />"
    + "<input type='button' name='xuan' value='全部不同意' />"
    + "<input type='button' name='xuan' value='全部很不同意' />"
    + "<h3>自动评语</h3>"
    + "<input type='button' name='pinyu' value='很不错的老师，赞一个！' />"
    + "<input type='button' name='pinyu' value='垃圾老湿，误人子弟！' />"
    + "<input type='button' name='pinyu' value='老前辈，德高望重!' />"
    + "<input type='button' name='pinyu' value='新来的，少不更事!' />"
    + "<input type='button' name='pinyu' value='我是来打酱油的^_^' />"
    + "</center><br />";

//插入页面元素页面
table = document.getElementsByTagName("table")[5];
div = document.createElement("div");
div.innerHTML = html;
table.insertBefore(div);

buttons = document.getElementsByName("xuan");
buttons2 = document.getElementsByName("pinyu");

buttons[0].onclick = function (evt) { xuanze(-1); };
buttons[1].onclick = function (evt) { xuanze(0); };
buttons[2].onclick = function (evt) { xuanze(1); };
buttons[3].onclick = function (evt) { xuanze(2); };
buttons[4].onclick = function (evt) { xuanze(3); };
buttons[5].onclick = function (evt) { xuanze(4); };

for (i = 0; i < buttons2.length; ++i) {
    buttons2[i].onclick = function (evt) { pinyu(this.value); };
}

subm = document.getElementsByClassName("bna1")[0];
subm.onclick = function (evt) { info() };