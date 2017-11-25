import {combineReducers} from 'redux';
import LanguageReducer from './reducer-language';

const allReducers = combineReducers({
    language: LanguageReducer
});

export default allReducers
