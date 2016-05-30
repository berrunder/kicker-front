import React, {PropTypes} from 'react';
import {List} from 'immutable';

const Totals = (props) => {
    if (props.scores.size > 0) {
        return (
            <div className="col-xs-6">
                <div className="totals-header">Total {props.scores.size} games</div>
                <div>
                    {props.scores.map(
                        (score) => <div key={score.get('id')} className="totals-item">{score.get('name')}: {score.get('score')}</div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div>No data</div>
    );
};

Totals.propTypes = {
    scores: PropTypes.instanceOf(List).isRequired
};

export default Totals;