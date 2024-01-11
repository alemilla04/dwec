document.addEventListener('DOMContentLoaded', setup);

function setup(_){
    const joke = getJoke();
    showJoke(joke);
}

function getJoke() {
    const url = 'https://api.chucknorris.io/jokes/random';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const joke = data.value;
        })
        .catch(alert);
}

function showJoke(joke) {

}