import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const session = handleActions({
  ['CHANGE_PERMISSION']: (state, { payload }) => state.updateIn(payload, i => !i)
}, fromJS({
  Users: {
    canRead: true,
    canCreate: true,
    canUpdate: true,
    canDelete: false
  }
}));

const sessionApp = combineReducers({
  session
});

export default sessionApp;
