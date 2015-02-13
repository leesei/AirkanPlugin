function setValue(obj) //保存选项设置
{
  var name = obj.id;
  localStorage[name] = obj.checked ? "checked" : "";
  showSavingSucceedTip();
}

function showSavingSucceedTip() {
  var latency = 0; //延时
  if (tipdiv.style.display == "block") //当前已有提示框
  {
    window.clearTimeout(tipTimerId);
    tipdiv.style.display = "none";
    latency = 100;
    window.setTimeout(function() {
      tipdiv.style.display = "block";
    }, latency);
  } else //当前没有提示框
  {
    tipdiv.style.display = "block";
  }
  tipTimerId = window.setTimeout(function() {
    tipdiv.style.display = "none";
  }, 2000 + latency);
}

var BG = chrome.extension.getBackgroundPage();
var tipTimerId; //提示框的计时器id
var tipdiv = document.createElement('DIV');
tipdiv.className = 'tip_succeed';
tipdiv.innerText = "选项已保存";
document.body.appendChild(tipdiv);
tipdiv.style.left = (document.body.clientWidth - tipdiv.clientWidth) / 2 + 'px';
tipdiv.style.display = "none";
tip = document.getElementById("ipdiv");
url = localStorage["ip"] || '';

tip.innerHTML = '小米盒子/电视 IP:<input type="text" value="' + url + '" id="ip">　';
document.getElementById("ip").addEventListener('blur', changecustom); //自定义地址框失去焦点事件
obj.addEventListener('click', changecustom); //自定义地址选项选中事件

function changecustom() { //更改自定义播放器
  var url = document.getElementById("ip").value;
  localStorage["ip"] = url;
  showSavingSucceedTip();
}
