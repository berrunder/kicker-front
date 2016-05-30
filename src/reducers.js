import { SCORES_LOADED } from './actions';
import {Map, List, fromJS} from 'immutable';

export const defaultState = Map({
    scores: List(),
    totals: List()
});

/**
 * @param {List} scores
 */
function calculateTotals(scores) {
    let totalsMap = Map();
    scores.forEach((score) => {
        const id1 = score.getIn(['Team1', 'ID']);
        if (!totalsMap.has(id1)) {
            totalsMap = totalsMap.set(id1, Map({
                id: id1,
                name: score.getIn(['Team1', 'Name']),
                score: 0
            }));
        }
        totalsMap = totalsMap.setIn([id1, 'score'], totalsMap.getIn([id1, 'score']) + score.get('Score1'));

        const id2 = score.getIn(['Team2', 'ID']);
        if (!totalsMap.has(id2)) {
            totalsMap = totalsMap.set(id2, Map({
                id: id2,
                name: score.getIn(['Team2', 'Name']),
                score: 0
            }));
        }
        totalsMap = totalsMap.setIn([id2, 'score'], totalsMap.getIn([id2, 'score']) + score.get('Score2'));
    });

    return List(totalsMap.values());
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TEST':
            console.log('Reducer test message');
            return state;
        case SCORES_LOADED:
        {
            const scores = fromJS(action.scores);
            return state.set('scores', scores)
                .set('totals', calculateTotals(scores));
        }
    }

    return state;
};

export default rootReducer;