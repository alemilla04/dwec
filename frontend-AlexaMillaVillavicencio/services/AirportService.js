export default class AirportService {
    async getAirports(){
        const token = window.sessionStorage.getItem('token');
    
        if(!token) {
            window.location = "./index.htm";
        }
    
        const url = 'http://10.88.74.4:3001/api/airports';
    
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
            throw new Error(`Cannot retrieve airports: ${error}`);
        }
    
        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve airports: [${response.status} ${response.statusText}]`);
        }
    
        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve airports: ${error}`);
        }
    
        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve airports: ${data.message}`);
        }
    
        return data.outcome.airports;
    }

    async getAirportByUuid(uuid){
        const token = window.sessionStorage.getItem('token');
    
        if(!token) {
            window.location = "./index.htm";
        }
    
        const url = `http://10.88.74.4:3001/api/airport/${uuid}`;
    
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
            throw new Error(`Cannot retrieve airport: ${error}`);
        }
    
        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve airport: [${response.status} ${response.statusText}]`);
        }
    
        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve airport: ${error}`);
        }
    
        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve airport: ${data.message}`);
        }
    
        return data.outcome.airport;
    }

    async getUuidAerosDestinoByAirportUuid(uuid){
        const token = window.sessionStorage.getItem('token');
    
        if(!token) {
            window.location = "./index.htm";
        }
    
        const url = `http://10.88.74.4:3001/api/destination_airports/origin_airport/${uuid}`;
    
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
            throw new Error(`Cannot retrieve destination airports: ${error}`);
        }
    
        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve destination airports: [${response.status} ${response.statusText}]`);
        }
    
        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve destination airports: ${error}`);
        }
    
        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve destination airports: ${data.message}`);
        }
    
        return data.outcome.airports;
    }

    async getFlights(originUuid, destiUuid) {
        const token = window.sessionStorage.getItem('token');
    
        if(!token) {
            window.location = "./index.htm";
        }
    
        const url = `http://10.88.74.4:3001/api/flights/origin_airport/${originUuid}/destination_airport/${destiUuid}`;
    
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
            throw new Error(`Cannot retrieve flights: ${error}`);
        }
    
        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve flights: [${response.status} ${response.statusText}]`);
        }
    
        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve flights: ${error}`);
        }
    
        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`Cannot retrieve flights: ${data.message}`);
        }
    
        return data.outcome.flights;
    }
}