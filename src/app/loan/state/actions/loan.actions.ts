import {Action} from '@ngrx/store';
import {Loan} from '../models/Loan';

export const GET_LOANS = '[Loan] GET_LOANS';
export const GET_LOANS_SUCCESS = '[Loan] GET_LOANS_SUCCESS';
export const GET_LOANS_ERROR = '[Loan] GET_LOANS_ERROR';

export class LoadLoans implements Action {
  readonly type = GET_LOANS;

  constructor(public payload: String) {
    console.log('HELLO');
  }
}

export class LoadLoansSucess implements Action {
  readonly type = GET_LOANS_SUCCESS;

  constructor(public payload: Loan[]) {

  }
}

export class LoadLoansFailure implements Action {
  readonly type = GET_LOANS_ERROR;

  constructor(public payload: String) {

  }
}

export type All = LoadLoans | LoadLoansSucess | LoadLoansFailure;


