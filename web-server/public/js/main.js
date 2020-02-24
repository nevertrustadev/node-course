const weatherForm = document.querySelector('form');
const searchInput = document.getElementById('search');

weatherForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const location = searchInput.value;

	fetch('http://localhost:3000/weather?address=' + location).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				console.log(data.location, data.forecast)
			}
		})
	});
});