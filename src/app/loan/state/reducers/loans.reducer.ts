import {Loan} from '../models/Loan';
import * as LoanActions from '../actions/loan.actions';

export interface State {
  loanId: String;
  loans: Loan[];
}


const initialState: State = {
  loanId: '',
  loans: []
};

export function reducer(state = initialState, action: LoanActions.All): State {
  switch (action.type) {
    case LoanActions.GET_LOANS: {
      return {
        ...state
        , loanId: action.payload
      };
    }
    case LoanActions.GET_LOANS_SUCCESS: {
      return {
        ...state
        , loans: action.payload
      };
    }
    case LoanActions.GET_LOANS_ERROR: {
      return {
        ...state
        , loanId: action.payload
      };
    }
    default:
      return state;
  }
}
