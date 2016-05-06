import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {fromJS} from 'immutable';
import ScoreItem from '../src/components/ScoreItem';

function shallowRenderItem(score) {
    return shallow(<ScoreItem team1={score.get('Team1')} team2={score.get('Team2')} score1={score.get('Score1')}
                              score2={score.get('Score2')} key={score.get('ID')}/>);
}

describe('ScoreItem component', () => {
    const team1 = {ID: 1, Name: 'Колмаков, Черкашин'};
    const team2 = {ID: 2, Name: 'Сальников, Ткаченко'};

    const score = fromJS({ID: 1, Team1: team1, Team2: team2, Score1: 3, Score2: 0, PlayedAt: 1460464494});

    it('renders scores', () => {
        const item = shallowRenderItem(score);

        expect(item.find('.item-scores').text()).to.contain(score.get('Score1') + ' - ' + score.get('Score2'));
    });

    it('renders team titles', () => {
        const item = shallowRenderItem(score);

        expect(item.find('.item-header').text()).to.contain(team1.Name + ' - ' + team2.Name);
    });
});