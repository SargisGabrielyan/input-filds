import {createStore, combineReducers} from 'redux';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);

const store = createStore(reducer, {
    inputs: [
        {value: '', type: 'text',  name:'Title'},
        {value: '', type: 'text',  name:'Name'},
        {value: '', type: 'text',  name:'Price'},
        {value: '', type: 'text',  name:'Description'}
    ]
});

export default store;