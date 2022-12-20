import checkComplete from "./components/check-complete.js";
import deleteIcon from "./components/delete-icon.js";

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



        //task.innerHTML = content;
        
        task.appendChild(taskContent)
        task.appendChild(deleteIcon())

        //agrego un elemento hijo
        list.appendChild(task)

        console.log(titleTask);
    }; 


    //Utilizo el evento con listenners (evento, accion)
    btn.addEventListener("click", createTask);





