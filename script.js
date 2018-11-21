
//creates a column:
var body = document.getElementById("grid")
for (var i = 0; i < 16; i++) {
    var row = document.createElement("div")
    row.classList.add("row")
    for (var j = 0; j < 16; j++) {
        var pixel = document.createElement("div")
        pixel.classList.add("pixel")
        row.appendChild(pixel)
        
        
}
    body.appendChild(row)
}

//creat row, then fill row

// for (var j = 0; i < 16; j++) {
//     var body = document.getElementById("grid")
//     var canvas = document.createElement("div")
//     canvas.classList.add("canvas")
//     var row = document.createElement("div")
//     row.classList.add("row")
//     var pixel = document.createElement("div")
//     pixel.classList.add("pixel")

//     body.appendChild(canvas)
//     canvas.appendChild(row)
//     row.appendChild(pixel)
// }

//

//
//need to isolate each part 
//if i click on blue, 
//then click on pixel, 
//I want the pixel background color to turn blue






//     card.appendChild(image)
//     card.appendChild(cardBody)
//     cardBody.appendChild(cardTitle)
//     cardBody.appendChild(cardText)
//     card.appendChild(unorderedList)
//     unorderedList.appendChild(listItem)
//     body.appendChild(card)


// }
//document.addEventListener('DOMContentLoaded', function() {
//     console.log('I was loaded')
//     var pixelElement = document.getElementsByClassName("pixel")
//     pixelElement[0].addEventListener("click", function(event){
//         console.log("clicked")
//         pixelElement[0].className = "blue-paint"
//     })
// })