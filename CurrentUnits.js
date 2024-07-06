layui.define(['jquery'], function (exports) {
  var $ = layui.jquery;

  // 定义多个方法
  var CurrentUnits = {
    hello: function (message) {
      console.log(message);
    },
    goodbye: function (name) {
      alert('Goodbye, ' + name);
    },
    greet: function (name, greeting) {
      alert(greeting + ', ' + name);
    },
  };

  // 输出模块字段
  exports('CurrentUnits', CurrentUnits);
});
