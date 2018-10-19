var page = require('webpage').create();
page.open('http://www.quanjing.com', function () {
  var fileName = +new Date() + '.png';
  page.render(fileName, {format: 'png', quality: '100'});
  phantom.exit();
});