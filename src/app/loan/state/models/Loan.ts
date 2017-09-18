export interface Loan {
  id: string;
  bankName: String;
  state: String;
  ifscCode: String;
  loanSanctionDate: Date;
  loanDurationMonths: number;
  loanAmount: number;
  intrestRate: number;
}
