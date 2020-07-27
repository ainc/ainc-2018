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
    if (document.getElementsByClassName("graph")[0] != undefined) {
        document.getElementsByClassName("graph")[0].remove();
    }

   var margin = {top: 30, right: 30, bottom: 70, left: 60},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    /*
    var svg = d3.select("#mygraph")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("class", "graph")
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
            */

            /*
    let data = [
        {Country: "Gross Salary", Value: numbers.grossSalary},
        {Country: "Gross Monthly Income", Value: numbers.grossMonthlyIncome},
        {Country: "Minimum Monthly Payments", Value: numbers.minMonthlyPayments},
        {Country: "ISA Percentage", Value: numbers.isaPercentage},
        {Country: "Cap", Value: numbers.cap},
        {Country: "Monthly Payment", Value: numbers.monthlyPayment}
    ];
    */
    let data = [
        {Payments: "# of Monthly Payments", Price: ""}
    ]

    // Parse the Data
    // X axis
    /*
    var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.Country; }))
    .padding(0.2);
    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
        */
    let slider = d3
        .sliderHorizontal()
        .min(0)
        .max(10)
        .step(1)
        .width(300)
        .displayValue(false)

    // Add Y axis
    /*
    var y = d3.scaleLinear()
    .domain([0, 1000])
    .range([ height, 0]);
    svg.append("g")
    .call(d3.axisLeft(y));
    */

    // Bars
    let svg = d3.select("#mygraph")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500)
        .append("g")
        .attr("transform", "translate(30, 30)")
        .call(slider)
    /*
    svg.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
        //.attr("x", function(d) { return x(d.Payments); })
        //.attr("x", function(d) { return slider(); })
        .call(slider)
        .attr("y", function(d) { return y(d.Price); })
        //.attr("width", x.bandwidth())
        .attr("width", 1000)
        .attr("height", function(d) { return height - y(d.Value); })
        .attr("fill", "#69b3a2");
        */
}