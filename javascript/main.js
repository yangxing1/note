function get_public_header() {
  function callback(content, success, XML) {
    var $header;
    if (success) {
      $header = $(content);
      $('.page').prepend($header);
    }
  }
  $.get('/public_header', callback);
}
function get_public_footer() {
  function callback(content, success, XML) {
    var $footer;
    if (success) {
      $footer = $(content);
      $('.page').append($footer);
    }
  }
  $.get('/public_footer', callback);
}

function render_part(data_str, public_str) {
  function callback(content, success, XML) {
    function callback_temp(content_temp, success_temp, XML_temp) {
      var data_catalog;
      var html;
      if (success_temp) {
        data_catalog = JSON.parse(content_temp);
        html = template(data_catalog);
        $('.content').append($(html));
      }
    }
    
    var template = Handlebars.compile(content);
    if (success) {
      $.get(data_str, callback_temp);
    }
  }
  $.get(public_str, callback);
}
function render_secondary() {
  function callback(content, success, XML) {
    var template;
    var html;
    if (success) {
      template = Handlebars.compile(content);
      html = template(date());
      $('.main').append($(html));
    }
  }
  $.get('/public_secondary', callback);
}
function date() {
  var tem = new Date();
  tem.setDate(1);
  tem.setMonth(6);
  var space;
  var day = 1;
  var day_list = [];
  if (tem.getDay() === 0) {
    space = 6;
  } else {
    space = tem.getDay() - 1;
  }
  for (var i = 0; i < 5; i++) {
    var temp = [];
    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < space) {
        temp.push('');
      } else {
        temp.push(day);
        day++;
      }
    }
    day_list.push(temp);
  }

  return {
    "day_list": day_list,
    "year": tem.getFullYear(),
    "month": tem.getMonth() + 1,
    "next": tem.getMonth()
  };
}