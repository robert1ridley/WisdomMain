import {combineReducers} from 'redux';
import LanguageReducer from './reducer-language';
import PageReducer from './reducer-page';

const allReducers = combineReducers({
    language: LanguageReducer,
    page: PageReducer
});

export default allReducers
