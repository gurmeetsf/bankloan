import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoanServiceService {

  constructor() {
  }

  getLoans() {
    const loans = [{
      id: 1, bankName: 'State bank Of India', state: 'KAR', ifscCode: '234234',
      loanSanctionDate: '05/09/2016', loanDurationMonths: '180', loanAmount: 40000000, intrestRate: 9.5
    }]
    return Observable.timer(3000).mapTo(loans);
  }

}
