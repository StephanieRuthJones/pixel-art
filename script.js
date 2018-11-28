


// //THIS CODE WORKS!:
//for each event listener need if statement which changes color on 
//first click and changes back to white on second
var brushColor;

document.getElementById("red-paint").addEventListener("click", function(){
    brushColor = "red"
})

document.getElementById("orange-paint").addEventListener("click", function(){
    brushColor = "orange"
})

document.getElementById("yellow-paint").addEventListener("click", function(){
    brushColor = "yellow"
})

document.getElementById("green-paint").addEventListener("click", function(){
    brushColor = "green"
})

document.getElementById("blue-paint").addEventListener("click", function(){
    brushColor = "blue"
})

//creates grid of white pixels on screen:
var body = document.getElementById("grid")
for (var i = 0; i < 16; i++) {
    var row = document.createElement("div")
    row.classList.add("row")
    for (var j = 0; j < 16; j++) {
        var pixel = document.createElement("div")
        pixel.classList.add("pixel")
        // pixel. for loop through pixel to add individual ids to each;
        //var x = document.getElementsByClassName("anchors")[0].id;
        row.appendChild(pixel)
        pixel.addEventListener("click", function(){
            if (event.target.className === brushColor) {
                event.target.className = "pixel"
            } else {
                event.target.className = brushColor
            }
    
            //replace class with color of brush using brushColor
            //class remove
        })
}
    body.appendChild(row)
}

//event.target.style
//.remove and .add to change colors
//for loop to create pallette
//event handler to each color on pallette and then wherever click, assigns that color to pixel



//turns first pixel red when click on it:
// var pixel = document.getElementsByClassName("pixel")[0]
// pixel.addEventListener("click", function(e){
//     pixel = pixel.id = "red"
// })

// var body = document.getElementById("grid")
// for (var i = 0; i < 16; i++) {
//     var row = document.createElement("div")
//     row.classList.add("row")
//     for (var j = 0; j < 16; j++) {
//         var pixel = document.createElement("div")
//         pixel.classList.add("pixel")
//         row.appendChild(pixel)
//         //if clear class to add color, need to re add pixel
//         //in css, can select canvas ID and then write div after 
//         //instead of using specific pixel class - any div that 
//         //is a child of the canvas ID
        
// }
//     body.appendChild(row)
// }

// document.getElementsByClassName("pixel")[0].id = "blue-paint"