import { fromJS } from 'immutable';

const initialState = fromJS({
  error: false,
  loading: false,
});

export default function app(state = initialState, action) {
  if (action.type.includes('FAILURE')) {
    return state
      .set('error', action.error)
      .set('loading', false);
  }

  if (action.type.includes('REQUEST')) {
    return state
      .set('error', false)
      .set('loading', true);
  }

  if (action.type.includes('SUCCESS')) {
    return state
      .set('loading', false);
  }

  return state;
}
