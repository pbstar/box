function delUrlData(url, name) {
  var urlparts = url.split("?");
  if (urlparts.length >= 2) {
    var prefix = encodeURIComponent(name) + "=";
    var pars = urlparts[1].split(/[&;]/g);
    for (var i = pars.length; i-- > 0; ) {
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        pars.splice(i, 1);
      }
    }
    return urlparts[0] + (pars.length > 0 ? "?" + pars.join("&") : "");
  }
  return url;
}
function isMobile() {
  let m =
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
  return navigator.userAgent.match(m);
}
function strToBase64(str) {
  if (str) {
    var encode = encodeURI(str);
    var base64 = btoa(encode);
    return base64;
  }
}
function base64ToStr(base64) {
  if (base64) {
    var decode = atob(base64);
    var str = decodeURI(decode);
    return str;
  }
}
function urlToCode(str) {
  if (str) return encodeURIComponent(str);
}
function codeToUrl(str) {
  if (str) return decodeURIComponent(str);
}
function getLocalStorage(name) {
  if (name) return base64ToStr(localStorage.getItem(name));
}
function setLocalStorage(name, value) {
  if (name) localStorage.setItem(name, strToBase64(value));
}
function getTime(str) {
  if (str) {
    let date = new Date(Number(str));
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    let day = date.getDate();
    day = day < 10 ? "0" + day : day;
    let h = date.getHours();
    h = h < 10 ? "0" + h : h;
    let m = date.getMinutes();
    m = m < 10 ? "0" + m : m;
    let s = date.getSeconds();
    s = s < 10 ? "0" + s : s;
    return year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;
  }
}
function getIsToday(str) {
  if (str) {
    return (
      new Date(Number(str)).toDateString() ==
      new Date(Date.now()).toDateString()
    );
  }
}
export default {
  delUrlData,
  isMobile,
  strToBase64,
  base64ToStr,
  urlToCode,
  codeToUrl,
  getLocalStorage,
  setLocalStorage,
  getTime,
  getIsToday,
};
