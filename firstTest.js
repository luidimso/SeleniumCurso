var webdriverio = require('webdriverio');
var options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};
var client = webdriverio.remote(options);

client.init().url('http://itepuenf.com.br/').click("#portal_link a").getTitle().then(function(title){
  console.log("Estamos em "+title);
}).end();
