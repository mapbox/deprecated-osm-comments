import initialState from '../constants/initial_state';
import * as types from '../constants/action_types';

export default function(state = initialState, action) {
    switch (action.type) {

        case types.LOADING:
            return Object.assign({}, state, {
                loading: action.loading
            });
        default:
            return state;
    }
}