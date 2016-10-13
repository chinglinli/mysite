import * as Immutable from 'immutable';
import { handleActions } from 'redux-actions';


const defaultState = Immutable.fromJS([]);

const reducerMap = {
    SET_POSTS: (state, action) => Immutable.fromJS(action.payload)
};

export default handleActions(reducerMap, defaultState);
