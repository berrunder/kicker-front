import { polyfill } from 'es6-promise';
import fetch from 'isomorphic-fetch';
const API_ENDPOINT = 'http://localhost:4000/v1/score';

polyfill();

export const fetchScores = () => {
    return fetch(API_ENDPOINT).then(function (response) {
        return response.json().then(function (json) {
            return json.data;
        });
    });
};