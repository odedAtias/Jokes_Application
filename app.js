const [jokeElement, jokeBtn, confing] = [
	document.getElementById('joke'),
	document.getElementById('btn'),
	{ headers: { Accept: 'application/json' } },
];

//Event listenr to replace a joke every click
jokeBtn.addEventListener('click', generateJoke);

//Function to generate a new joke
async function generateJoke() {
	const [res, data] = [
		await fetch('https://icanhazdadjoke.com', confing),
		await res.json(),
	];
	jokeElement.innerHTML = data.joke;
}
generateJoke();

// fetch('https://icanhazdadjoke.com', confing)
// 	.then(respone => respone.json())
// 	.then(data => (jokeElement.innerHTML = data.joke));
