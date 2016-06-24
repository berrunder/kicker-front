import {fromJS} from 'immutable';
import {expect} from 'chai';
import reducer, {defaultState} from '../src/reducers';
import { SCORES_LOADED } from '../src/actions';

describe('reducer', () => {

    it('has an initial state', () => {
        const action = {type: 'SET_SCORES', scores: []};
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(defaultState);
    });

    it('converts object to Immutable', () => {
        const team1 = {id: 1, name: 'Колмаков, Черкашин'};
        const team2 = {id: 2, name: 'Сальников, Ткаченко'};

        const scores = [
            {id: 1, Team1: team1, Team2: team2, score1: 3, score2: 0, playedAt: 1460464494},
            {id: 2, Team1: team1, Team2: team2, score1: 2, score2: 1, playedAt: 1460464594},
            {id: 3, Team1: team1, Team2: team2, score1: 1, score2: 2, playedAt: 1460464694}
        ];
        const action = {type: SCORES_LOADED, scores: scores};
        const nextState = reducer(undefined, action);
        expect(nextState.get('scores')).to.equal(fromJS(scores));
    });

    it('calculate totals after SCORES_LOADED', () => {
        const team1 = {id: 1, name: 'Колмаков, Черкашин'};
        const team2 = {id: 2, name: 'Сальников, Ткаченко'};

        const scores = [
            {id: 1, Team1: team1, Team2: team2, score1: 3, score2: 0, playedAt: 1460464494},
            {id: 2, Team1: team1, Team2: team2, score1: 2, score2: 1, playedAt: 1460464594},
            {id: 3, Team1: team1, Team2: team2, score1: 1, score2: 2, playedAt: 1460464694}
        ];
        const action = {type: SCORES_LOADED, scores: scores};
        const nextState = reducer(undefined, action);

        const expected = [
            {
                id: team1.id,
                name: team1.name,
                score: scores.reduce((total, score) => +total + parseInt(score.score1), 0)
            },
            {
                id: team2.id,
                name: team2.name,
                score: scores.reduce((total, score) => +total + parseInt(score.score2), 0)
            }
        ];

        expect(nextState.get('totals')).to.equal(fromJS(expected));
    });

});