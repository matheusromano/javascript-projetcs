const colors = ["white" ,"grey", "green", "red", "rgba(133, 122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function() {
    // get random numbers between 0 - 5 (Becouse it is the lenght od our const - Colors)
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]

})

function getRandomNumber() {
    return Math.round(Math.random() * colors.length)
    
}