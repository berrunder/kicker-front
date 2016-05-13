import React, {Component} from 'react';
import {connect} from 'react-redux';
import ScoreList from '../components/ScoreList';
import Totals from '../components/Totals';

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="row">
            <ScoreList scores={this.props.scores}/>
            <Totals scores={this.props.totals} />
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        scores: state.get('scores'),
        totals: state.get('totals')
    };
}

export default connect(mapStateToProps)(App);