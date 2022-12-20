    //Creando el boton de borrar
    const deleteIcon = () => {
        const i = document.createElement("i");
        i.classList.add("fas", "fa-trash-alt", "icon")
        i.addEventListener("click", deleteTask);
        return i
    }

    const deleteTask = (event) => {
        const card = event.path[1];
        card.remove()
    }

export default deleteIcon