import { createStore } from 'redux';
import todos from '../reducer/reducer';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  todos,
  devTools
);