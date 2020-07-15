const $ = document.getElementById;

function parseAsPrice(num) {
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function parseAsNumber(str) {
    return Math.ceil(Number.parseFloat(str.replace(/,/g, '').replace(/\$/g, '')));
}

function updateMonthlyPayments() {
    const grossSalary         = document.getElementById("grossSalary");
    const grossMonthlyIncome  = document.getElementById("grossMonthlyIncome");
    const minMonthlyPayments  = document.getElementById("minMonthlyPayments");
    const isaPercentage       = document.getElementById("isaPercentage");
    const cap                 = document.getElementById("cap");
    const monthlyPayment      = document.getElementById("monthlyPayment");

    let numbers = {
        grossSalary: parseAsNumber(grossSalary.value),
        grossMonthlyIncome: parseAsNumber(grossMonthlyIncome.value),
        minMonthlyPayments: parseAsNumber(minMonthlyPayments.value),
        isaPercentage: parseAsNumber(isaPercentage.value),
        cap: parseAsNumber(cap.value),
        monthlyPayment: parseAsNumber(monthlyPayment.value)
    }

    numbers.grossMonthlyIncome = Math.ceil(numbers.grossSalary / 12);
    numbers.monthlyPayment   = numbers.grossMonthlyIncome / 12 * (numbers.isaPercentage / 100);
    grossMonthlyIncome.value = `\$${Number.isNaN(numbers.grossMonthlyIncome) ? "0" : parseAsPrice(numbers.grossMonthlyIncome)}`;
    monthlyPayment.value     = `\$${numbers.monthlyPayment.toFixed(2)}`;
}

updateMonthlyPayments();

const inputs = document.getElementsByClassName("inp");
for (let i in inputs) {
    inputs[i].oninput = updateMonthlyPayments;
}