export default class PlaymobilService {
    async getSeries(){
        const token = window.localStorage.getItem('token');

        if(!token) {
            throw new Error('There is no token, please, you must log in.')
        }

        let response;
        const url = 'http://127.0.0.1:8082/api/series';

        try{
            response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                },
            })    
        } catch(error){
            throw new Error(`Cannot retrieve series: ${error}`)
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

    async getBoxesUuid(uuid){
        const token = window.localStorage.getItem('token');

        if(!token) {
            throw new Error('There is no token, please, you must log in.')
        }

        let response;
        const url = `http://127.0.0.1:8082/api/serie/${uuid}/boxes`;
        //const url = `http://127.0.0.1:8082/api/serie/2969cb0a-e117-4b00-97fc-1887cbd046c0/boxes`;

        try{
            response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                },
            })    
        } catch(error){
            throw new Error(`Cannot retrieve boxes: ${error}`)
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
            throw new Error('There is no token, please, you must log in.')
        }

        let response;
        const url = `http://127.0.0.1:8082/api/box/${uuid}`;

        try{
            response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                },
            })    
        } catch(error){
            throw new Error(`Cannot retrieve the box: ${error}`)
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve the box: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve the box: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve the box: ${data.message}`);
        }

        return data.box;
    }

    async getFiguresOfBox(uuid) {
        const token = window.localStorage.getItem('token');

        if(!token) {
            throw new Error('There is no token, please, you must log in.')
        }

        let response;
        const url = `http://127.0.0.1:8082/api/box/${uuid}/figures`;

        try{
            response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                },
            })    
        } catch(error){
            throw new Error(`Cannot retrieve figures: ${error}`)
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

    async getFigureByUuid(uuid){
        const token = window.localStorage.getItem('token');

        if(!token) {
            throw new Error('There is no token, please, you must log in.')
        }

        let response;
        const url = `http://127.0.0.1:8082/api/figure/${uuid}`;

        try{
            response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                },
            })    
        } catch(error){
            throw new Error(`Cannot retrieve the figure: ${error}`)
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve the figure: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve the figure: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve the figure: ${data.message}`);
        }

        return data.figure;

    }
}