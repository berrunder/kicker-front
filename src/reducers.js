import { SCORES_LOADED } from './actions';
import {Map, List, fromJS} from 'immutable';

const defaultState = Map({
    scores: List()
});

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TEST':
            console.log('Reducer test message');
            return state;
        case SCORES_LOADED:
            return state.set('scores', fromJS(action.scores));
    }

    return state;
};

export default rootReducer;