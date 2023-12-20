let btn = document.querySelector("button")
btn.addEventListener("click", function () {
    let randomColor = getRandomColor()
    let divColor = document.querySelector("div")
    divColor.style.backgroundColor = randomColor
    document.querySelector("h3").innerText = randomColor;
    document.querySelector("h3").style.color = randomColor;
})
function getRandomColor() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let color = `rgb(${red}, ${green}, ${blue})`
    return color;
}
console.log(getRandomColor())