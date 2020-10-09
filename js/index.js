var bo = document.body
    || document.getElementsByTagName("body")[0];
addEle();
//创建函数
function addEle() {
    var div = document.createElement('div');
    var ul = document.createElement('ul');
    var ul1 = document.createElement('ol');
    for (let i = 1; i < 7; i++) {
        var li = document.createElement('li');
        var li1 = document.createElement('li');
        if (i == 1) {
            li1.setAttribute("class", 'active')
        }
        li1.title = i;
        li1.addEventListener("click", clickTo);
        li1.innerHTML = i;
        var a = document.createElement('a');
        var img = document.createElement('img');
        img.setAttribute("src", './img/bar' + i + '.jpg')
        a.appendChild(img)
        li.appendChild(a)
        ul.appendChild(li)
        ul1.appendChild(li1);
    }
    div.appendChild(ul)
    div.appendChild(ul1);
    bo.appendChild(div)

}

//移动函数
setTimeout(() => {
    tomimeat();
}, 1000)
function clickTo(tar) {
    num = tar.path[0].title - 2;
}
var num = 0;
function tomimeat() {
    setInterval(increase, 1500);
}
function increase() {
    var ul = document.getElementsByTagName("ul")[0];
    var li = ul.getElementsByTagName("li");
    var ol = document.getElementsByTagName("ol")[0];
    var ol1 = ol.getElementsByTagName("li");
    num++;
    if (num == li.length) {
        num = 0;
    }
    for (let i = 0; i < li.length; i++) {
        if (i == num) {
            li[i].setAttribute("style", 'z-index:2')
            ol1[i].setAttribute("class", 'active')
        } else {
            li[i].setAttribute("style", 'z-index:1')
            ol1[i].setAttribute("class", '')
        }

    }
}