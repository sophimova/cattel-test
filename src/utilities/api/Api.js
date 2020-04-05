import axios from 'axios';

const BASE_URL = 'http://cattell-test.somee.com/';

const api = axios.create({
    baseURL: BASE_URL,
});

class Api {
    static async get(url, config) {
        return api.get(url, config);
    }

    static async put(url, data, config) {
        return api.put(url, data, config);
    }

    static async post(url, data, config) {
        return api.post(url, data, config);
    }

    static async delete(url, config) {
        return api.delete(url, config);
    }
}

export default Api;
