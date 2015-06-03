

// global function
function _(id) {
    return document.getElementById(id);
}

function showJson(data, div) {
    for(var key in data) {
       div.innerHTML += "<br/>" + key + ": " + data[key];
       for (var subKey in data[key]) {
            div.innerHTML += "<br/>--" + subKey + data[key][subKey];

            for (var sub2Key in data[key][subKey]) {
                div.innerHTML += "<br/>----" + sub2Key + data[key][subKey][sub2Key];
            }
       }
    }
}