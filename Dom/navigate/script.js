document.addEventListener("DOMContentLoaded",function(){




const ol = document.querySelector("ol")
const lastLi = ol.lastElementChild
ol.insertBefore(lastLi, ol.firstElementChild)


const h2ThirdSection = document.querySelector("section:nth-of-type(3) > h2");
const h2SecondSection = document.querySelector("section:nth-of-type(2) > h2");
const secondSection = document.querySelector("section:nth-of-type(2)");
const thirdSection = document.querySelector("section:nth-of-type(3)");

const main = document.querySelector("main")
main.insertBefore(thirdSection , secondSection)

const lastSection = document.querySelector("section:nth-of-type(3)")
console.log(lastSection);
lastSection.remove()

})