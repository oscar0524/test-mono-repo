import { Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { fetchHealth, fetchHealthSuccess, fetchHealthFailure } from '../slices/healthSlice';

export const fetchHealthEpic: Epic = (action$) =>
  action$.pipe(
    ofType(fetchHealth.type),
    switchMap(() =>
      from(
        fetch('http://localhost:8080/api/health')
          .then((response) => response.json())
      ).pipe(
        map((data) => fetchHealthSuccess(data)),
        catchError((error) =>
          of(fetchHealthFailure(error.message || 'Failed to fetch health status'))
        )
      )
    )
  );
