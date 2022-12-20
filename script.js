( () => {
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

    //Creando el boton de concluido
    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far","fa-check-square", "icon")
        i.addEventListener("click", completeTask);
        return i
    }

    //Funcion de completar el task
    const completeTask = (event) => {
        const element = event.target
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon");
        element.classList.toggle("far");
    }

    //Creando el boton de borrar
    const deleteIcon = () => {
        const i = document.createElement("i");
        i.classList.add("fas", "fa-trash-alt", "icon")
        i.addEventListener("click", deleteTask);
        return i
    }

    const deleteTask = (event) => {

    }


}) ()