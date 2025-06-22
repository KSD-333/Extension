fetch('https://icanhazdadjoke.com/slack')
    .then(response => response.json())
    .then(data => {
        const joke = data.attachments[0].text;
        const jokeDisplay = document.getElementById('jokeDisplay');
        jokeDisplay.innerHTML = joke;
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
        jokeDisplay.innerHTML = 'Failed to load joke.';
    });