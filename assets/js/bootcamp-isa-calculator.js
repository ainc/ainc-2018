const $ = document.getElementById;

function parseAsPrice(str) {
    str = String(str);
    const arr = str.split('');
    const len = arr.length;
    for (let i = len - 1; i > -1; i--) {
        if ((len - 1 - i) % 3 == 0 && i != len - 1) {
            arr.splice(i + 1, 0, ",");
        }
    }
    return arr.join('');
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

    grossSalary.value          = `\$${Number.isNaN(parseAsPrice(numbers.grossSalary)) ? "0" : parseAsPrice(numbers.grossSalary)}`;
    numbers.grossMonthlyIncome = Math.ceil(numbers.grossSalary / numbers.isaPercentage);
    grossMonthlyIncome.value = `\$${isNaN(parseAsPrice(numbers.grossMonthlyIncome)) ? "0" : parseAsPrice(numbers.grossMonthlyIncome)}`;
    monthlyPayment.value     = `\$${parseAsPrice(numbers.grossMonthlyIncome * Math.ceil(numbers.isaPercentage / 100))}`;
}

updateMonthlyPayments();

const inputs = document.getElementsByClassName("inp");
for (let i in inputs) {
    inputs[i].oninput = updateMonthlyPayments;
}