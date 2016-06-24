import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {fromJS} from 'immutable';
import ScoreList from '../src/components/ScoreList';
import ScoreItem from '../src/components/ScoreItem';

describe('ScoreList component', () => {

    it('renders a list of scores', () => {
        const team1 = {id: 1, name: 'Колмаков, Черкашин'};
        const team2 = {id: 2, name: 'Сальников, Ткаченко'};

        const scores = [
            {id: 1, Team1: team1, Team2: team2, score1: 3, score2: 0, playedAt: 1460464494},
            {id: 2, Team1: team1, Team2: team2, score1: 2, score2: 1, playedAt: 1460464594},
            {id: 3, Team1: team1, Team2: team2, score1: 1, score2: 2, playedAt: 1460464694}
        ];

        const list = shallow(<ScoreList scores={fromJS(scores)} />);
        
        expect(list.find(ScoreItem)).to.have.length(3);
    });

});