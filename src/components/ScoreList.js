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
                        (score) => <ScoreItem team1={score.get('Team1')} team2={score.get('Team2')} score1={score.get('Score1')}
                                              score2={score.get('Score2')} key={score.get('ID')}/>
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