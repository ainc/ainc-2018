const $ = document.getElementById;
const $1 = document.getElementsByClassName;

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

    setupGraph(numbers);
}

updateMonthlyPayments();

const inputs = document.getElementsByClassName("inp");
for (let i in inputs) {
    inputs[i].oninput = updateMonthlyPayments;
}

function setupGraph(numbers) {
  /*
    if (document.getElementsByClassName("graph")[0] != undefined) {
        document.getElementsByClassName("graph")[0].remove();
    }
    */
  /*
    if (document.getElementById("mygraph") != undefined) {
        document.getElementById("mygraph").remove();
    }
    */
    //document.getElementById("mygraph").removeAllChildNodes();
    let mygraph = document.getElementById("mygraph");
    while (mygraph.firstChild) {
      mygraph.removeChild(mygraph.firstChild);
    }

    var margin = {top: 30, right: 30, bottom: 70, left: 60},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    let svg = d3.select("#mygraph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(30, 30)")
        //.call(slider)

    // 40,000 -> 120,000
    let slider = d3
        .sliderHorizontal()
        //.min(0)
        .min(40,000)
        .max(120,000)
        //.max(10)
        .step(1)
        .width(width - 55)
        //.displayValue(false)
        .displayValue(true)

    //numbers.monthlyPayment   = numbers.grossMonthlyIncome / 12 * (numbers.isaPercentage / 100);
    let data = [
        {Salary: 40000, Interest: 40000 / 12 / 12* (numbers.isaPercentage / 100)},
        {Salary: 50000, Interest: 50000 / 12 / 12* (numbers.isaPercentage / 100)},
        {Salary: 60000, Interest: 60000 / 12 / 12* (numbers.isaPercentage / 100)},
        {Salary: 70000, Interest: 70000 / 12 / 12* (numbers.isaPercentage / 100)},
        {Salary: 80000, Interest: 80000 / 12 / 12* (numbers.isaPercentage / 100)},
        {Salary: 90000, Interest: 90000 / 12 / 12* (numbers.isaPercentage / 100)},
        {Salary: 100000, Interest: 100000 / 12 / 12* (numbers.isaPercentage / 100)},
        {Salary: 110000, Interest: 110000 / 12 / 12* (numbers.isaPercentage / 100)},
        {Salary: 120000, Interest: 120000 / 12 / 12* (numbers.isaPercentage / 100)},
    ]

    // X axis
    var x = d3.scaleBand()
        .range([ 0, width ])
        //.domain(data.map(function(d) { return d.Country; }))
        .domain(data.map(function(d) {return d.Salary; }))
        .padding(0.2);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        //.call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
    
    svg.append("text")
        .text("Gross Income in Thousands")
        .attr("transform", `translate(80,${height + 60})`)

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 100])
        .range([ height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    //svg.call(slider)
    svg.append("g")
        .call(slider)
        .attr("transform", `translate(30, ${height + 10})`);

    // Bars
    svg.selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
        //.attr("x", function(d) { return slider(); })
        .attr("x", function(d) { return x(d.Salary); })
        .attr("y", function(d) { return y(d.Interest); })
        .attr("width", 15)
        .attr("height", function(d) { return height - y(d.Interest); })
        .attr("fill", "#69b3a2")
        .attr("transform", "translate(10,0)")
}
