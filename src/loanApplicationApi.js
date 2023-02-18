export async function submitLoanApplication(personalCode, loanAmount, loanPeriod) {
    let data = {personalCode, loanAmount, loanPeriod};

    const response = await fetch('http://localhost:8080/loan-decision/application', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
      },
    });
    return response.json();
  }
