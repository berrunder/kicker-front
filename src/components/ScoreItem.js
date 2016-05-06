import { PropTypes } from 'react';
import React from 'react';
import {Map} from 'immutable';

const ScoreItem = (props) => {
    return <div>
        <div className="item-header">{props.team1.get('Name')} - {props.team2.get('Name')}</div>
        <div className="item-scores">{props.score1} - {props.score2}</div>
    </div>;
};

ScoreItem.propTypes = {
    team1: PropTypes.instanceOf(Map).isRequired,
    team2: PropTypes.instanceOf(Map).isRequired,
    score1: PropTypes.number.isRequired,
    score2: PropTypes.number.isRequired
};

export default ScoreItem;