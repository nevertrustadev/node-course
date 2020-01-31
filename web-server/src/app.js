const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
	res.render('index', {
		title: 'Welcome!',
		name: 'Chris Lampert'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'Chris Lampert'
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help Page',
		message: 'Welcome to the help page - how can we help?'
	})
});




app.get('/weather', (req, res) => {
	res.send({
		forecast: 'Cloudy',
		location: 'Manchester'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});