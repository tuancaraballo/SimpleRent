var express = require('express');

var app = express();
const PORT = process.env.PORT ||  3000;

app.use(function(request, response, next) {  //--> openWeatherMap always operates on http and not https, so for this app, I'm going
											// to redirect all https traffic to http
	if(request.headers['x-forwarded-proto'] === 'https'){ //-> if traffic is over https, then modify it to http, this way it doesn't break 
															// local host
		response.redirect('http://' + request.hostname + request.url);	
	}else{
		next();
	}
});

// folder to expose to web server
app.use(express.static('public'));


app.listen(PORT, function() {
    console.log('Server listening to port '+ PORT);
});