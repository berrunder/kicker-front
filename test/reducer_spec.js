import {fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducers';
import { SCORES_LOADED } from '../src/actions';

describe('reducer', () => {

    it('has an initial state', () => {
        const action = {type: 'SET_SCORES', scores: []};
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS({
            scores: []
        }));
    });

    it('converts object to Immutable', () => {
        const team1 = {ID: 1, Name: 'Колмаков, Черкашин'};
        const team2 = {ID: 2, Name: 'Сальников, Ткаченко'};


        const scores = [
            {ID: 1, Team1: team1, Team2: team2, Score1: 3, Score2: 0, PlayedAt: 1460464494},
            {ID: 2, Team1: team1, Team2: team2, Score1: 2, Score2: 1, PlayedAt: 1460464594},
            {ID: 3, Team1: team1, Team2: team2, Score1: 1, Score2: 2, PlayedAt: 1460464694}
        ];
        const action = {type: SCORES_LOADED, scores: scores};
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS({
            scores
        }));
    });

});