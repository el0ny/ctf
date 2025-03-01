function call_me(response) {
var http = new XMLHttpRequest();
var url = 'http://192.168.201.54:8089/';
var params = 'data';

http.open('POST', url, true);

http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {
if(http.readyState == 4 && http.status == 200) {
console.log(http.responseText);
}
}
http.send(params);
}
