import * as types from '../constants/action_types';

export function fetchNotes(obj, cb) {
    return (dispatch, getState) => {
        dispatch(isLoading(true));
        var state = getState();
        console.log('state', state);
    };
}

export function isLoading(loading) {
  return {
    type: types.LOADING,
    loading: loading
  };
}