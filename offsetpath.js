"use strict"

document.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
    fetch("arrow-svgrepo-com.svg")
        .then(response => response.text())
        .then(svgData => {
            document.querySelector("#thesvg").innerHTML = svgData;
        })
}