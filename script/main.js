let screen = document.querySelector(".input")
let memory = []

function display(value){
    screen.value += value
}

function result(){
    let sum = screen.value
    screen.value = eval(sum)
}


function clearSum(){
    screen.value = ""
}


