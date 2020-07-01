let obj = {};

document.getElementsByTagName("body")[0].onload = () => {
    console.log("Loaded");
    $.get("https://raw.githubusercontent.com/ainc/5Across_2017/master/_data/video-archives.json", (data, status) => {
        const jsonObj = JSON.parse(data);
        Object.assign(obj, jsonObj);
    });
}

function selectChange() {
    const value = document.getElementById("years").value;
    const index = 2019 - Number(value);
    console.log(obj[index]);
    const months = {
        "february": document.getElementById("februaryX"),
        "april": document.getElementById("aprilX"),
        "june": document.getElementById("juneX"),
        "august": document.getElementById("augustX"),
        "october": document.getElementById("octoberX"),
        "finals": document.getElementById("finalsX")
    };
    Object.values(months).forEach((val, ind) => {
        const info = val.children[1].children[0];
        if (obj[index].months[ind] != undefined) {
            info.children[0].innerHTML = obj[index].months[ind].pitches[0].name;
        }
        else {
            info.children[0].innerHTML = "No event this month!";
        }
        info.children[2].innerHTML = `Founder1:${value}`;
        info.children[3].innerHTML = `Founder2:${value}`;
    });
    /*
    februaryX.children[1].children[0].children[0].innerHTML = obj[index]["months"][0]["pitches"][0].name;
    februaryX.children[1].children[0].children[2].innerHTML = Math.floor(Math.random() * 100);
    februaryX.children[1].children[0].children[3].innerHTML = Math.floor(Math.random() * 100);
    */
}