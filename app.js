const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "brown", "gray", "orange"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

const getRandomNumber = () => {
    const randomColor = Math.floor(Math.random() * colors.length)
    return randomColor
}
