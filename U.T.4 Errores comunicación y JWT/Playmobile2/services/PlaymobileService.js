export class PlaymobileService {
    async getSeries() {
        const token = window.localStorage.getItem('token');
        if(!token) {
            alert("Error. There's no token, you must log in.")
            window.location = '/views/login.html';
        }

        const url = 'http://127.0.0.1:8082/api/series';

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            response = await fetch(url, { 
                method: 'get', 
                headers 
            });
        } catch (error) {
            throw new Error(`Cannot retrieve series: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve series: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve series: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve series: ${data.message}`);
        }

        return data.series;
    }

    async getBoxes(uuid) {
        const token = window.localStorage.getItem('token');
        if(!token) {
            alert("Error. There's no token, you must log in.")
            window.location = '/views/login.html';
        }

        const url = `http://127.0.0.1:8082/api/serie/${uuid}/boxes`;

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            response = await fetch(url, { 
                method: 'get', 
                headers 
            });
        } catch (error) {
            throw new Error(`Cannot retrieve boxes: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve boxes: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve boxes: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve boxes: ${data.message}`);
        }

        return data.boxes;
    }

    async getBoxByUuid(uuid) {
        const token = window.localStorage.getItem('token');
        if(!token) {
            alert("Error. There's no token, you must log in.")
            window.location = '/views/login.html';
        }

        const url = `http://127.0.0.1:8082/api/box/${uuid}`;

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            response = await fetch(url, { 
                method: 'get', 
                headers 
            });
        } catch (error) {
            throw new Error(`Cannot retrieve box: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve box: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve box: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve box: ${data.message}`);
        }

        return data.box;
    }

    async getFigures(uuid) {
        const token = window.localStorage.getItem('token');
        if(!token) {
            alert("Error. There's no token, you must log in.")
            window.location = '/views/login.html';
        }
        
        const url = `http://127.0.0.1:8082/api/box/${uuid}/figures`;

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            response = await fetch(url, { 
                method: 'get', 
                headers 
            });
        } catch (error) {
            throw new Error(`Cannot retrieve figures: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve figures: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve figures: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve figures: ${data.message}`);
        }

        return data.figures;
    }

    async getFigureByUuid(uuid) {
        const token = window.localStorage.getItem('token');
        if(!token) {
            alert("Error. There's no token, you must log in.")
            window.location = '/views/login.html';
        }
        
        const url = `http://127.0.0.1:8082/api/figure/${uuid}`;

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            response = await fetch(url, { 
                method: 'get', 
                headers 
            });
        } catch (error) {
            throw new Error(`Cannot retrieve figure: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve figure: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve figure: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve figure: ${data.message}`);
        }

        return data.figure;
    }
}