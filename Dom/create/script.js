document.addEventListener("DOMContentLoaded", function () {

const articleContainer = document.querySelector("article")

const numberContainer = 5

for (let i = 1; i <= numberContainer; i++) {
    const section = document.createElement("section")
    section.textContent = "test" + i



    const randomColor = "#" + Math.floor(Math.random() * 10000).toString(16)

    section.style.backgroundColor = randomColor

    const isDark = darkColor(randomColor)

    if (isDark) {

        section.style.color = "#FFFFFF"
    }else {

        section.style.color = "#000000"
    }


    articleContainer.appendChild(section)
}



function darkColor(color) {

    const hexColor = parseInt(color.substring(1), 16);

    const brightnessThreshold = 0x7FFFFF;

    return hexColor <= brightnessThreshold;
}

})