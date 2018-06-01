import axios from 'axios';
import { API_KEY, ROOT_URL, FETCH_WEATHER } from '../constant';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},india`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}