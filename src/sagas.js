import {fetchScores} from './api';
import { SCORES_LOADED } from './actions';
import {put} from 'redux-saga/effects';

export function* loadScores() {
    const scores = yield fetchScores();
    yield put({type: SCORES_LOADED, scores});
}