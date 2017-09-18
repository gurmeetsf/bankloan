import * as fromLoan from './loans.reducer';

export interface State {
  loan: fromLoan.State;
}

export const reducers = {
  loan: fromLoan.reducer
};
