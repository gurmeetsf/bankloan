import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Rx';
import {GET_LOANS, GET_LOANS_SUCCESS, GET_LOANS_ERROR} from '../actions/loan.actions';
import {LoanServiceService} from '../../services/loan-service.service';

@Injectable()
export class LoansEffects {
  constructor(private actions$: Actions,
              private loanService: LoanServiceService) {
  }

  @Effect() getTodos$ = this.actions$
    .ofType(GET_LOANS)
    .switchMap(action =>
      this.loanService.getLoans()
        .map(loans => ({type: GET_LOANS_SUCCESS, payload: loans}))
        .catch(() => Observable.of({type: GET_LOANS_ERROR})));
}
