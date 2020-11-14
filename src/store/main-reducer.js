import {combineReducers} from 'redux' // combine les differents reducers en 1 seurl
import TodoReducer from './reducers/reducer-TodoRedux'

// combine les différents reducers pour l'utiliser dans mon createStore

export default combineReducers(
    {
        TodoReducer
        //HangmanReducer
    }
);


// export default store = createStore(combineReducers);