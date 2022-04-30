const [jokeElement, jokeBtn, confing] = [
	document.getElementById('joke'),
	document.getElementById('btn'),
	{ headers: { Accept: 'application/json' } },
];

//Function to generate a new joke
function generateJoke() {
	fetch('https://icanhazdadjoke.com', confing)
		.then(respone => respone.json())
		.then(data => (jokeElement.innerHTML = data.joke));
}
generateJoke();
