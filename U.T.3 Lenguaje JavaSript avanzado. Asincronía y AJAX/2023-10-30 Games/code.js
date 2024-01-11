import GamesService from "./services/GamesService.js";

document.addEventListener("DOMContentLoaded", setup);

async function setup() {
    const service = new GamesService();
    const genres = await service.getGenres();

    const games = await service.getGames();

    renderTableWithGames(games);

    // renderTableWithGenres(genres);
}

// function renderTableWithGenres(genres) {
//     const nTbody = document.querySelector('#tTbody');

//     genres.forEach(({id, name}) => {
//         const nTr = document.createElement('tr');
//         nTbody.appendChild(nTr);
//         const nTd = document.createElement('td');
//         nTr.appendChild(nTd);
//         // nTd.addEventListener('click', renderGames);
//         nTd.setAttribute('id', `tTd${name}`)
//         nTd.dataset.code = id;
//         const nText = document.createTextNode(name);
//         nTd.appendChild(nText);
//     });
// }

function renderTableWithGames(games) {
    const nTbody = document.querySelector('#tTbody')

    games.forEach( ({id, title}) => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);

        const nTd = document.createElement('td');
        nTr.appendChild(nTd);
        nTd.setAttribute('id', `tTd${id}`)
        nTd.dataset.dataJuego = id;
        const nText = document.createTextNode(title)
        nTd.appendChild(nText);
        // nTd.addEventListener('click', showGame);

    });

}

// async function renderGames() {
//     const service = new GamesService();
//     const games = await service.getGames();

//     // games.forEach(({id}) => {
//     //     const game = await service.getGameById(id);
//     // });
// }
