import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {fromJS} from 'immutable';
import ScoreList from '../src/components/ScoreList';
import ScoreItem from '../src/components/ScoreItem';

describe('ScoreList component', () => {

    it('renders a list of scores', () => {
        const team1 = {ID: 1, Name: 'Колмаков, Черкашин'};
        const team2 = {ID: 2, Name: 'Сальников, Ткаченко'};

        const scores = [
            {ID: 1, Team1: team1, Team2: team2, Score1: 3, Score2: 0, PlayedAt: 1460464494},
            {ID: 2, Team1: team1, Team2: team2, Score1: 2, Score2: 1, PlayedAt: 1460464594},
            {ID: 3, Team1: team1, Team2: team2, Score1: 1, Score2: 2, PlayedAt: 1460464694}
        ];

        const list = shallow(<ScoreList scores={fromJS(scores)} />);
        
        expect(list.find(ScoreItem)).to.have.length(3);
    });

});