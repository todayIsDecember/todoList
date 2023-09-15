import { putTasks } from "./animations/todoDone";

export function submitForm() {
  const form = document.forms["todoForm"];
  const todoInput = form[0];
  const writerInput = form[1];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoInputValue = todoInput.value;
    const writeInputValue = writerInput.value;
    if (!todoInputValue || !writeInputValue) {
      showAlert(todoInputValue, writeInputValue);
      return;
    }
    putTasks(todoInputValue, writeInputValue);
    form.reset();
  });
}

const showAlert = (todo, writer) => {
  let msg = "";
  if (!todo && writer) {
    msg = "please write a todo";
  } else if (!writer && todo) {
    msg = "please write a name";
  } else {
    msg = "please write a todo and a name";
  }

  document.body.insertAdjacentHTML("afterbegin", showAlertTEmplate(msg));
  setTimeout(() => {
    document.body.removeChild(document.body.children[0]);
  }, 3000);
};

const showAlertTEmplate = (msg) => {
  return `
          <div class="alert">
            <p class="alert__msg">${msg}</p>
          </div>
        `;
};
