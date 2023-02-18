import '../loanapplicationform.css';
import {useContext} from "react";
import {LoanApplicationContext} from "./loanApplicationForm";

function ResultComponent() {
  const loanApplicationResponse = useContext(LoanApplicationContext)
  const loanAmountMessage = `Maximum loan amount: ${loanApplicationResponse.offerAmount} euros`
  const loanPeriodMessage = `Loan period: ${loanApplicationResponse.offerPeriod} months`

  return (
    <div>
      {loanApplicationResponse.loanGranted ?
        <div className={"accepted-container"}>
          <div className={"result-message"}>Your application for installment payments was successful!</div>
          <div className={"result-details"}>{loanAmountMessage}</div>
          <div className={"result-details"}>{loanPeriodMessage}</div>
        </div>
        :
        <div className={"declined-container"}>
          <div className={"result-message"}>Unfortunately, your application is declined!</div>
        </div>
      }
    </div>
  );
}

export default ResultComponent;
