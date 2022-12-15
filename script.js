const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    input.value = "";
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li")
    //A este li tenemos que agregarle una clase ya que tiene codigo css tambien
    task.classList.add("card");
    const content = `            
        <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>
        </li>`
    task.innerHTML = content;

    //Con appendChild estamos diciendo al elemnto seleccionado agregarle un hijo
    list.appendChild(task)

    console.log(content);
}; 
console.log(btn);

btn.addEventListener("click", createTask);