import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {fromJS} from 'immutable';
import Totals from '../src/components/Totals';

describe('Totals component', () => {
    const team1 = {ID: 1, Name: 'Колмаков, Черкашин'};
    const team2 = {ID: 2, Name: 'Сальников, Ткаченко'};

    const scores = [
        {
            id: team1.ID,
            name: team1.Name,
            score: 5
        },
        {
            id: team2.ID,
            name: team2.Name,
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