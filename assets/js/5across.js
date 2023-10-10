let obj = {};

document.getElementsByTagName("body")[0].onload = () => {
    $.get("/assets/js/5across.json", (data, status) => {
        console.log("Data:");
        console.log(data);
        const jsonObj = data;
        Object.assign(obj, jsonObj);
        selectChange();
    });
}

function selectChange() {
    const value = document.getElementById("years").value;
    const index = 2020 - Number(value);
    const events = {
        "Event1": document.getElementById("event1"),
        "Event2": document.getElementById("event2"),
        "Event3": document.getElementById("event3"),
        "Event4": document.getElementById("event4"),
        "Event5": document.getElementById("event5"),
        "Event6": document.getElementById("event6")
    };

    Object.values(events).forEach((val, ind) => {
        val.children[0].children[0].innerHTML = `${obj.years[value][Object.keys(events)[ind]].month} ${value}`;
        const info = val.children[1].children[0];
        info.closest(".month").style.display = "block";
        if (obj.years[value][Object.keys(events)[ind]].winner != "") {
            info.children[0].innerHTML = obj.years[value][Object.keys(events)[ind]].winner;
        }
        else {
            info.closest(".month").style.display = "none";
            console.log(document.getElementById(Object.keys(events)[ind]));
        }

        info.children[2].innerHTML = obj.years[value][Object.keys(events)[ind]].founder || "";
        info.children[3].innerHTML = obj.years[value][Object.keys(events)[ind]].founder2 || "";
        const link_buttons = document.getElementsByClassName("video-url");
        console.log(obj.years[value][Object.keys(events)[ind]]);
        if (obj.years[value][Object.keys(events)[ind]]["url"] != "#") {
            link_buttons[ind].onclick = () => {
                location.href = obj.years[value][Object.keys(events)[ind]]["url"] || "https://www.youtube.com/playlist?list=PL_YvoQ-KM3YHl7D29MzJClPvRqp_PL7me";
                location.
            }
        }
        else {
            link_buttons[ind].onclick = () => {
                alert("Coming soon!");
            }
        }
        })
    }
