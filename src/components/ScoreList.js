import React, {PropTypes} from 'react';
import ScoreItem from './ScoreItem';
import {List} from 'immutable';

const ScoreList = (props) => {
    if (props.scores.size > 0) {
        return (
            <div className="col-xs-6">
                <div>Total {props.scores.size} games</div>
                <div>
                    {props.scores.map(
                        (score) => <ScoreItem team1={score.get('Team1')} team2={score.get('Team2')} score1={score.get('score1')}
                                              score2={score.get('score2')} key={score.get('id')}/>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div>No data</div>
    );
};

ScoreList.propTypes = {
    scores: PropTypes.instanceOf(List).isRequired
};

export default ScoreList;