function calculateLoan(){

let P=parseFloat(document.getElementById('loanAmount').value);

let annualRate=parseFloat(
document.getElementById('interestRate').value
);

let n=parseFloat(
document.getElementById('loanTerm').value
);

let r=annualRate/100/12;

let payment=
P*(r*Math.pow(1+r,n))/
(Math.pow(1+r,n)-1);

let total=payment*n;

let interest=total-P;

document.getElementById("monthly").innerHTML=
"Monthly Payment: R"+
payment.toFixed(2);

document.getElementById("totalPay").innerHTML=
"Total Repayment: R"+
total.toFixed(2);

document.getElementById("interestPaid").innerHTML=
"Interest Paid: R"+
interest.toFixed(2);

}
function vehicleCalc(){

let price=
parseFloat(
document.getElementById('vehiclePrice').value
);

let deposit=
parseFloat(
document.getElementById('deposit').value
);

let P=price-deposit;

let annual=
parseFloat(
document.getElementById('rate').value
);

let n=
parseFloat(
document.getElementById('months').value
);

let r=annual/100/12;

let pay=
P*(r*Math.pow(1+r,n))/
(Math.pow(1+r,n)-1);

document.getElementById(
'vehicleResult'
).innerHTML=
"Estimated Monthly Payment: R"+
pay.toFixed(2);

}
function affordCalc(){

let income=parseFloat(
document.getElementById("income").value
);

let expenses=parseFloat(
document.getElementById("expenses").value
);

let available=income-expenses;

let estimate=available*60;

document.getElementById(
"affordResult"
).innerHTML=
"Estimated affordable loan: R"+
estimate.toFixed(2);

}
function extraSavings(){

let extra=
parseFloat(
document.getElementById("extra").value
);

let savings=extra*120;

document.getElementById(
"savingResult"
).innerHTML=
"Potential interest saved: R"+
savings.toFixed(2);

}