



const button = document.getElementById("data")
const input = document.getElementById("input")

button.addEventListener("click", function(){
    const request = fetch ("https://randomuser.me/api/?results=12&nat=fr")
console.log("j'ai ma request", request)

    request.then(reponse => {
        return reponse.json()
    })


    .then(data =>{
        const div = document.createElement("div")
        document.body.appendChild(div)

        input.addEventListener("input", function(){

            div.innerHTML = ""

            const inputValue = input.value.toLowerCase()

                data.results.forEach (user => {
                    if(inputValue === "nom") {
                        const userInfo = document.createElement("p");
                        userInfo.textContent = `${user.name.first} ${user.name.last}`
                        div.appendChild(userInfo)
                    }


                    
                })
         

    })
    
})
})





