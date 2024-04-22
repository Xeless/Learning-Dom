const actionSquare = document.querySelectorAll(".actionsquare");
const displaySquare = document.querySelector(".displayedsquare-wrapper");
const log = document.querySelector("ul");

actionSquare.forEach((square) => {
  square.addEventListener("click", function () {

    let color;
    if (square.classList.contains("green")){
        color = "lime"
    } else if (square.classList.contains("violet")) {
        color = "magenta"
    }else if (square.classList.contains("orange")){

        color = "orange"
    }
       

    const newSquare = document.createElement("div");
    newSquare.classList.add("displayedsquare");
    newSquare.style.backgroundColor = color


    displaySquare.appendChild(newSquare)


    const currentTime = new Date().toLocaleTimeString()
    const newLogItem = document.createElement("li")
    newLogItem.innerHTML = `<strong> ${currentTime} Created a new ${color} square </strong>`
    log.appendChild(newLogItem)
  });
});
