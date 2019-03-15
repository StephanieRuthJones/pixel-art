const canvas = document.querySelector(".canvas")

const makeGrid = () => {
    for (let i = 1; i < 30; i++) {
        let row = document.createElement("tr")
        canvas.appendChild(row)

        for (let j = 1; j < 30; j++) {
            let cell = document.createElement("td")
            row.appendChild(cell)
            cell.addEventListener("mousedown", () => {
                let color = document.querySelector("input").value
                cell.style.backgroundColor = color
            })
        }
    }
}

const erase = (e) => {
    canvas.addEventListener("dblclick", (e) => {
        e.target.style.backgroundColor = null
    })
}

const colorPicker = (e) => {
    let input = document.querySelector("input")
    input.addEventListener("input", (e) => {
        let color = document.querySelector("input").value
        console.log(color)
    })
}

makeGrid()

colorPicker()

erase()