export default class GamesService {
    static URL_BASE = 'http://127.0.0.1:3000/';

    async getGenres() {
        const url = GamesService.URL_BASE + 'genres';
        const response = await fetch(url);
        const data = await response.json();
        return data.genres;
    }

    async getPlatforms() {
        const url = GamesService.URL_BASE + 'platforms';
        const response = await fetch(url);
        const data = await response.json();
        return data.platforms;
    }

    async getPublishers() {
        const url = GamesService.URL_BASE + 'publisher';
        const response = await fetch(url);
        const data = await response.json();
        return data.platforms
    }

    async getGames() {
        const url = GamesService.URL_BASE + 'games';
        const response = await fetch(url);
        const data = await response.json();
        return data.games;
    }

    async getGameById(id) {
        const url = GamesService.URL_BASE + id;
        const response = await fetch(url);
        const data = await response.json();
        return data.game;
    }

    async getGamesByGenre(genreId){
        const games = await this.getGames();

        for (const {id} of games) {
            const game = await this.getGameById(id);
        }

    }
}