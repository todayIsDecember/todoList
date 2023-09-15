const container = document.querySelector(".card__container");

const tasks = {};

export function todoDone() {
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete__button")) {
      let button = e.target;
      continueFunction(button);
    } else if (e.target.closest(".complete__button")) {
      let button = e.target.closest(".complete__button");
      continueFunction(button);
    } else {
      return;
    }
  });
}

function continueFunction(btn) {
  const span = btn.children[0];
  const card = btn.closest(".card");
  span.classList.toggle("completed");
  span.classList.toggle("active");
  const text = card.querySelector(".card_todo");
  text.classList.toggle("completed");
  text.classList.toggle("active");
  card.classList.toggle("completed");
  card.classList.toggle("active");
  if (card.classList.contains("completed")) {
    tasks[card.getAttribute("id")].status = "completed";
  } else {
    tasks[card.getAttribute("id")].status = "active";
  }
}

export const filter__todoes = (btn) => {
  container.textContent = "";
  let id = btn.getAttribute("id");
  if (id === "all") {
    Object.values(tasks).forEach((task) => {
      insertIntoHTMLHandler(task);
    });
  } else if (id === "active" || id === "completed") {
    Object.values(tasks).forEach((task) => {
      if (task.status == id) {
        insertIntoHTMLHandler(task);
      } else {
        return;
      }
    });
  } else {
    return;
  }
};

const generateId = () => {
  return Object.keys(tasks).length + 1;
};
export const putTasks = (taskTodo, taskWriter) => {
  const id = generateId();
  const obj = {
    Id: id,
    todo: taskTodo,
    writer: taskWriter,
    status: "active",
  };
  tasks[obj.Id] = obj;
  let card = putTaskTemplate(obj);
  container.insertAdjacentHTML("afterbegin", card);
  console.log(tasks);
};

const insertIntoHTMLHandler = (el) => {
  let card = putTaskTemplate(el);
  container.insertAdjacentHTML("afterbegin", card);
};

const putTaskTemplate = (task) => {
  return `
  <div class="card ${task.status}" id="${task.Id}">
    <button class="complete__button button">
      <span class="${task.status}"></span>
    </button>
    <div class="informations">
      <div class="card_writer">${task.writer}:</div>
        <div class="card_todo ${task.status}">${task.todo}</div>
    </div>
  </div>
  `;
};
