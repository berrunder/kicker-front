import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {fromJS} from 'immutable';
import ScoreItem from '../src/components/ScoreItem';

function shallowRenderItem(score) {
    return shallow(<ScoreItem team1={score.get('Team1')} team2={score.get('Team2')} score1={score.get('score1')}
                              score2={score.get('score2')} key={score.get('id')}/>);
}

describe('ScoreItem component', () => {
    const team1 = {id: 1, name: 'Колмаков, Черкашин'};
    const team2 = {id: 2, name: 'Сальников, Ткаченко'};

    const score = fromJS({id: 1, Team1: team1, Team2: team2, score1: 3, score2: 0, playedAt: 1460464494});

    it('renders scores', () => {
        const item = shallowRenderItem(score);

        expect(item.find('.item-scores').text()).to.contain(score.get('score1') + ' - ' + score.get('score2'));
    });

    it('renders team titles', () => {
        const item = shallowRenderItem(score);

        expect(item.find('.item-header').text()).to.contain(team1.name + ' - ' + team2.name);
    });
});