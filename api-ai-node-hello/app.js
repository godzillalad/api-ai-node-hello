var apiai = require('apiai');

var app = apiai("098309498cc5450780629429736b6fe5");

var request = app.textRequest('<Your text query>', {
    sessionId: '1'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();