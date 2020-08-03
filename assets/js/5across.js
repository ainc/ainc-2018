let obj = {};

document.getElementsByTagName("body")[0].onload = () => {
    $.get("/assets/js/5across_past.json", (data, status) => {
        console.log("Data:");
        console.log(data);
        const jsonObj = data;
        Object.assign(obj, jsonObj);
        selectChange();
    });
}

function selectChange() {
    const value = document.getElementById("years").value;
    const index = 2019 - Number(value);
    const months = {
        "February": document.getElementById("februaryX"),
        "April": document.getElementById("aprilX"),
        "June": document.getElementById("juneX"),
        "August": document.getElementById("augustX"),
        "October": document.getElementById("octoberX"),
        "Finals": document.getElementById("finalsX")
    };
    Object.values(months).forEach((val, ind) => {
        val.children[0].children[0].innerHTML = `${Object.keys(months)[ind]} ${value}`;
        const info = val.children[1].children[0];
        if (obj.years[value][Object.keys(months)[ind]].winner != undefined) {
            info.children[0].innerHTML = obj.years[value][Object.keys(months)[ind]].winner;
        }
        else {
            info.children[0].innerHTML = "No event this month!";
        }
        info.children[2].innerHTML = obj.years[value][Object.keys(months)[ind]].founder || "";
        info.children[3].innerHTML = obj.years[value][Object.keys(months)[ind]].founder2 || "";
        const link_buttons = document.getElementsByClassName("video-url");
        console.log(obj.years[value][Object.keys(months)[ind]]);
        if (obj.years[value][Object.keys(months)[ind]]["url"] != "#") {
            link_buttons[ind].onclick = () => {
                location.href = obj.years[value][Object.keys(months)[ind]]["url"] || "#";
            }
        }
        else {
            link_buttons[ind].onclick = () => {
                alert("Coming soon!");
            }
        }
    });
}