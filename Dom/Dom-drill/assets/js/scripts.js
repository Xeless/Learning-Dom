const uls = document.querySelectorAll("ul");

uls.forEach((ul) => {
    const children = ul.children;
  
    for (let i = 0; i < children.length; i++) {
  
      children[i].addEventListener("click", function () {
        alert("manu est moche !");
      });
  

if ( i === 0 ) {
    const newDiv = document.createElement("div")
    const newSelect = document.createElement("select")
    ul.insertBefore(newDiv , ul.firstChild)
    ul.insertBefore(newSelect , ul.firstChild)

}


      if (i === 7) {

    

        children[i].classList.add("important");
  
        children[i].addEventListener("click", function () {
          if (this.classList.contains("important")) {
            alert(
              "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
            );
          }
        });
  
        ul.insertBefore(children[i], ul.firstChild);
        console.log(children[i]);
      }
    }
  });
  