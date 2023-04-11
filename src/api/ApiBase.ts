import axios, { AxiosInstance } from 'axios';

class ApiBase {
    urlBase: string;
    axios: AxiosInstance;
    constructor(urlBase: string) {
        this.urlBase = urlBase;
        this.axios = axios.create({ baseURL: this.urlBase });
    }
}

export default ApiBase;