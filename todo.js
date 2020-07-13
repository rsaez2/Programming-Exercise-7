let todo = "";
let todoarry = []
const todoadd = document.querySelector("#newTodo")

document.querySelector('form').addEventListener("submit",function(){
    event.preventDefault();
   
    todo = todoadd.value;
})
