function createH1 () {
const text = "Keller"


let index = 0

const interval = setInterval (() => {
const char = text.charAt(index)

const h1 = document.createElement("h1")
h1.textContent = char
document.body.appendChild(h1)

index++

if(index === text.length) {
    clearInterval(interval)
}




}, 1000)
}

setTimeout(createH1,5000)



