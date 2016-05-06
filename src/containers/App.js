import React, {Component} from 'react';
import {connect} from 'react-redux';
import ScoreList from '../components/ScoreList';

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="row">
            <ScoreList scores={this.props.scores}/>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        scores: state.get('scores')
    };
}

export default connect(mapStateToProps)(App);