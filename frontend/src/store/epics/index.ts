import { combineEpics } from 'redux-observable';
import { fetchHealthEpic } from './healthEpic';

export const rootEpic = combineEpics(
  fetchHealthEpic
);
