const btn = document.querySelector("[data-form-btn]");
let input = document.querySelector("[data-form-input]");

 const createTask = (evento) => {
    evento.preventDefault();
    console.log(input.value);
}
console.log(btn);

btn.addEventListener("click", createTask);