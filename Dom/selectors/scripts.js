const allClasse = document.querySelectorAll(".important")


allClasse.forEach(element => {
    
    element.setAttribute("title", "This is an important item")
});


const allImg = document.querySelectorAll("img")

allImg.forEach(image => {


if(!image.classList.contains("important")) {

    image.style.display = "none"
}
})


const paragraph = document.querySelectorAll("p")

for (const allParagraph of paragraph ) {
    console.log(allParagraph.textContent)

    if (allParagraph.classList.length > 0) {
        console.log("Classe" , allParagraph.classList)
    }


    if (!allParagraph.classList.contains("important")) {
        const randomColor = "#" + Math.floor(Math.random() * 1000).toString(16);
        allParagraph.style.color = randomColor;
    }
 
}


