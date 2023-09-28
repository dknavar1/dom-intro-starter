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

// Selecting a group with a CSS selector
let colors = ["#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9"];

let svgs = document.querySelectorAll("#svgs svg");

console.log(svgs);

//iterate through the SVG collection and change the color of each

for(let i = 0; i < svgs.length; i++){
    svgs[i].style.stroke = colors[i];
}

// individual elements with CSS selector

document.querySelector(".bold").style.color = "#7C9EA6";

// changing dom node content, targets first li
document.querySelector(".content_list li:first-of-type").textContent = "this is new list item text";

// changing dom mode content, targets third li with index number, append +=

document.querySelectorAll(".content_list li")[2].innerHTML += " <strong>I love corgis</strong>";

// removing attributes, challenge activity hint
document.querySelector("#remove a").removeAttribute("hidden");
