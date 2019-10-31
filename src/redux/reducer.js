import {ACTION_INCREASE} from './actions';
import {combineReducers} from 'redux';
import {initState} from './state';


function countNum(state = initState, action) {
    switch (action.type) {
        case ACTION_INCREASE:
            return {
                ...state,
                ...state.count++,
            };
        default:
            return state;
    }
}


const countApp = combineReducers({
    countNum,
});


export default countApp;
