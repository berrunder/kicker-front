import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {fromJS} from 'immutable';
import Totals from '../src/components/Totals';

describe('Totals component', () => {
    const team1 = {id: 1, name: 'Колмаков, Черкашин'};
    const team2 = {id: 2, name: 'Сальников, Ткаченко'};

    const scores = [
        {
            id: team1.id,
            name: team1.name,
            score: 5
        },
        {
            id: team2.id,
            name: team2.name,
            score: 4
        }
    ];

    it('has header', () => {
        const totals = shallow(<Totals scores={fromJS(scores)} />);

        expect(totals.find('.totals-header')).to.have.length(1);
    });

    it('renders a list of scores', () => {
        const totals = shallow(<Totals scores={fromJS(scores)} />);

        expect(totals.find('.totals-item')).to.have.length(2);
    });

});