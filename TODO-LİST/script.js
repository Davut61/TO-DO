let addButton = document.querySelector("#addBtn");
let toDoContainer = document.getElementById("toDoContainer")
let inputText = document.querySelector("#inputText")
let clearBtn = document.querySelector("#clearBtn")

addButton.addEventListener("click",function(event){
    let paragraf = document.createElement("p")
    paragraf.classList.add("paragraf-style")
    toDoContainer.appendChild(paragraf);
    paragraf.innerHTML = inputText.value; 
    inputText.value  = " "

    paragraf.addEventListener("click",function(){
        paragraf.style.textDecoration = " line-through";
        paragraf.style.color = " red"
    })

    paragraf.addEventListener("dblclick", function(){
       toDoContainer.removeChild(paragraf)
    })

    clearBtn.addEventListener("click",function(){
        paragraf.remove();
    })

    event.preventDefault();
})