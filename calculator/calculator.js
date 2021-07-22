window.addEventListener('DOMContentLoaded', function () {
  // i made form border red so you know it
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // ok so this was our first thing we did 
  // we connected the html or dom inputs of loan-amount, loan years, loan-rate
  // we made variables of similar name then we made an obj that basically 
  // gives our inputs default values in the dom you can see them physically
  // inside the input, this was done by initializing the values of our vars
  // to our objects values using dot notation so 
  // for example loanAmount.value = objValues.amount;
  let objValues = { amount: 2000, years: 5, rate: 3.5 }
  let loanAmount = document.querySelector('#loan-amount')
  let loanYears = document.querySelector('#loan-years')
  let loanRate = document.querySelector('#loan-rate')
  loanAmount.value = objValues.amount;
  loanYears.value = objValues.years;
  loanRate.value = objValues.rate;

  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // i need help understanding this part...
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}
