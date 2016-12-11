import { createAction } from 'redux-actions';

import * as config from '../../config';


export const setArticles = createAction('SET_ARTICLES', articles => articles);


export function fetchArticles() {
    return function (dispatch) {
        return fetch(`${config.API_SERVER_URL}/articles/`)
            .then(response => response.json())
            .then(articles => dispatch(setArticles(articles)));
    };
}
