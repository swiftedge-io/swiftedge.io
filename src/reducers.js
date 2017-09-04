import { combineReducers } from 'redux';

import { UPDATE_FILTERS } from './actions.js'

function handleUpdateFilters(state, action) {
  return {
    showBookmarked: action.showBookmarked,
    showUnBookmarked: action.showUnBookmarked,
    name: action.name,
    email: action.email,
    company: action.company
  };
}

const initialState = {
  showBookmarked: true,
  showUnBookmarked: true,
  name: '',
  email: '',
  company: ''
};

function emailFilters(state=initialState, action) {
  return ({
    [UPDATE_FILTERS]: handleUpdateFilters,
  }[action.type] || (v => v))(state, action);
}

const reducers = combineReducers({
  emailFilters
});

export default reducers;
