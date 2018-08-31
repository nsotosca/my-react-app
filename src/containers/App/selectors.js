import { createSelector } from 'reselect';

const selectApp = state => state.app;

const appSelectors = {
  makeSelectError: createSelector(selectApp, appState => appState.get('error')),
  makeSelectLoading: createSelector(selectApp, appState => appState.get('loading')),
};

export default appSelectors;
