import '../loanapplicationform.css';
import {createContext, useEffect, useState} from "react";
import {submitLoanApplication} from "../loanApplicationApi";
import ResultComponent from "./resultComponent";
import button from "bootstrap/js/src/button";

export const LoanApplicationContext = createContext(
  {loanApplicationResponse: {loanGranted: null, offerAmount: null, offerPeriod: null, loanApplicationDetails: null}},
  {init: null})

function LoanApplicationForm() {
  const [loanApplicationResponse, setLoanApplicationResponse] = useState(null);

  const [personalCode, setPersonalCode] = useState(null);
  const [loanAmount, setLoanAmount] = useState(null);
  const [loanPeriod, setLoanPeriod] = useState(null);

  const [allowedToProceed, setAllowedToProceed] = useState(true);

  async function handleSubmit(event) {
    event.preventDefault();
    if (allowedToProceed) {
      const response = await submitLoanApplication(personalCode, loanAmount, loanPeriod);
      setLoanApplicationResponse(response);
    } else {
      setAllowedToProceed(false);
    }
  }

  function initForm() {
    setLoanApplicationResponse(null)
  }

  return (
    <LoanApplicationContext.Provider value={loanApplicationResponse}>
      <div>
        {!!loanApplicationResponse
          ? <ResultComponent/>
          : <div>
            <form className={"form-container"}>
              <div className={"form-item"}>
                <h1>Apply for installment payments</h1>
                <p>For indicative installment payment plan, please fill the form.
                  Requested loan amount should be between 2000 and 10000 euros and period between 12 and 60 months.</p>
                <hr/>
              </div>

              <div className={"form-item"}>
                <label htmlFor="personal-code"><b>Personal Identification Number</b></label>
                <input
                  type="text"
                  placeholder="enter your personal identification number"
                  id="personal-code"
                  name="personal-code"
                  required
                  onChange={(value) => setPersonalCode(value.target.value)}
                />
              </div>

              <div className={"form-item"}>
                <label htmlFor="loan-amount"><b>Loan Amount</b></label>
                <input
                  type="text"
                  placeholder="loan amount in eur"
                  id="loan-amount"
                  required
                  onChange={(value) => setLoanAmount(value.target.value)}
                />
              </div>

              <div className={"form-item"}>
                <label htmlFor="loan-period"><b>Loan Period</b></label>
                <input
                  type="text"
                  placeholder="loan period in months"
                  id="loan-period"
                  required
                  onChange={(value) => setLoanPeriod(value.target.value)}
                />
              </div>
              <div className={"form-item"}>
                <button
                  type="submit"
                  className="submitbtn"
                  onClick={handleSubmit}>Apply
                </button>
              </div>
            </form>
          </div>}
        {loanApplicationResponse && (
          <button className="initbtn" onClick={() => initForm()}>Start new application form</button>
        )}
      </div>
    </LoanApplicationContext.Provider>
  );
}

export default LoanApplicationForm;
