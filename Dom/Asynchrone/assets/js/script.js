


const button = document.getElementById("test")

button.addEventListener("click",function(){
    const request = fetch("assets/js/date.json");
    console.log("j'attend la request",request)


 request.then(reponse => {
    return reponse.text()
 })

.then(text => {
    const date = JSON.parse(text)
    const ul = document.createElement("ul")
    document.body.appendChild(ul)



    date.forEach(item => {
        const liName = document.createElement("li")
        const liAge = document.createElement("li")
        const liSecret = document.createElement("li")
        const liPower = document.createElement("li")
        liName.textContent = item.name
        liAge.textContent = item.age
        liSecret.textContent = item.secretIdentity
        liPower.textContent = item.power
        ul.appendChild(liName)
        ul.appendChild(liAge)
        ul.appendChild(liSecret)
        ul.appendChild(liPower)
    
    })
})




})
