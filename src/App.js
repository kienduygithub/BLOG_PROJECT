import React, { useEffect, useState } from 'react'
import './App.scss';
import * as actions from './store/actions'
import { connect } from 'react-redux'
function App(props) {
    return (
        < div className="App" >
            <h1>Xin chào, Duy đây!</h1>
            <div>
                <button onClick={() => props.decreaseCounter()}>Decrease</button>
                <span>Count: {props.count}</span>
                <button onClick={() => props.increaseCounter()}>Increase</button>
            </div>
        </div >
    );
}
const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}
const mapDispatchToProps = (dispatch) => ({
    increaseCounter: () => dispatch(actions.increaseStart()),
    decreaseCounter: () => dispatch(actions.decreaseStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);