import React, {PropTypes} from 'react';
import {List} from 'immutable';

const Totals = (props) => {
    if (props.scores.size > 0) {
        return (
            <div className="col-xs-6">
                <div>Total {props.scores.size} games</div>
                <div>
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