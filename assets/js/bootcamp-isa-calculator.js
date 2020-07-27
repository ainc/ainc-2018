const $ = document.getElementById;

<<<<<<< HEAD
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
=======
function parseAsPrice(num) {
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
>>>>>>> fcc300c6563c825d536ecc312aff50cd03ed1b7b
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

<<<<<<< HEAD
    grossSalary.value          = `\$${Number.isNaN(parseAsPrice(numbers.grossSalary)) ? "0" : parseAsPrice(numbers.grossSalary)}`;
    numbers.grossMonthlyIncome = Math.ceil(numbers.grossSalary / numbers.isaPercentage);
    grossMonthlyIncome.value = `\$${isNaN(parseAsPrice(numbers.grossMonthlyIncome)) ? "0" : parseAsPrice(numbers.grossMonthlyIncome)}`;
    monthlyPayment.value     = `\$${parseAsPrice(numbers.grossMonthlyIncome * Math.ceil(numbers.isaPercentage / 100))}`;
=======
    numbers.grossMonthlyIncome = Math.ceil(numbers.grossSalary / 12);
    numbers.monthlyPayment   = numbers.grossMonthlyIncome / 12 * (numbers.isaPercentage / 100);
    grossMonthlyIncome.value = `\$${Number.isNaN(numbers.grossMonthlyIncome) ? "0" : parseAsPrice(numbers.grossMonthlyIncome)}`;
    monthlyPayment.value     = `\$${numbers.monthlyPayment.toFixed(2)}`;
>>>>>>> fcc300c6563c825d536ecc312aff50cd03ed1b7b
}

updateMonthlyPayments();

const inputs = document.getElementsByClassName("inp");
for (let i in inputs) {
    inputs[i].oninput = updateMonthlyPayments;
}