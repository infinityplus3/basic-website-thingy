function setExpiry(exyears) {
  var d = new Date();
  d.setTime(d.getTime() + exyears * 24 * 60 * 60 * 1000 * 365);
  document.cookie = "expires=" + d.toUTCString() + ";path=/";
}

function setThing(cvalue) {
  if (cvalue[0] !== "submitted") {
    //console.log(cvalue[0]);
    //console.log(cvalue[1]);
    document.cookie = cvalue[0] + "=" + cvalue[1] + ";";
    //console.log(document.cookie);
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function clearCookie() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

export { getCookie, setExpiry, clearCookie, setThing };
