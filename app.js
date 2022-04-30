const [jokeElement, jokeBtn, confing] = [
	document.getElementById('joke'),
	document.getElementById('btn'),
	{ headers: { Accept: 'application/json' } },
];

//Event listenr to replace a joke every click
jokeBtn.addEventListener('click', generateJoke);

//Function to generate a new joke
async function generateJoke() {
	let res = await fetch('https://icanhazdadjoke.com', confing);
	let data = await res.json();
	jokeElement.innerHTML = data.joke;
}
generateJoke();
