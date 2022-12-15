
const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    //guardo el texto en una variable
    const value = input.value;
    //Para limpiar el input 
    input.value = "";
    const list = document.querySelector("[data-list]")
    //agrego un elemento a la variable
    const task = document.createElement("li")
    //agrego la clase
    task.classList.add("card");

    const taskContent = document.createElement("div")
    //agrego un elemento html a un elemento padre
    taskContent.appendChild(checkComplete())
    
    const titleTask = document.createElement("span")
    titleTask.classList.add("task")
    //inserto texto 
    titleTask.innerText = value
    
    //agrego un elemento hijo
    taskContent.appendChild(titleTask)

    const deleteCard = () => {
        const i = document.createElement("i");
        i.classList.add("fas", "fa-trash-alt", "icon")

        return i
    }

    //task.innerHTML = content;
    
    task.appendChild(taskContent)
    task.appendChild(deleteCard())

    //agrego un elemento hijo
    list.appendChild(task)

    console.log(titleTask);
}; 

console.log(btn);

//Utilizo el evento con listenners (evento, accion)
btn.addEventListener("click", createTask);

//Creando el boton de concluido
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square", "icon")

    return i
}