// Danielle Navarrette

// ID Secion, get paragraph by ID, add the span content

document.getElementById('firstPara').
innerHTML += " <span class=\"tan\">This is new tan text.</span>";

// Tag name section, get all images, change width to 250px

let images = document.getElementsByTagName("img");
console.log(images);

for(let image of images){
    image.width = "250";
}

// Elements by class name
// set med-blue spans to: #3C5E73
// set light-blue spans to: #7C9EA6

let lightBlueSpans = document.getElementsByClassName("light-blue");
let mediumBlueSpans = document.getElementsByClassName("med-blue");

for (let span of lightBlueSpans){
    span.style.color = "#7C9EA6";
}

for (let span of mediumBlueSpans){
    span.style.color = "#3C5E73";
}

