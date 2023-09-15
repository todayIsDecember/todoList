import "../scss/style.scss";
import { todoDone, filter__todoes } from "./animations/todoDone";
import { submitForm } from "./form.js";
const filter_container = document.querySelector(".todo__list__filter");

function initProg() {
  todoDone();
  submitForm();
  filter_container.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter__btn")) {
      filter__todoes(e.target);
      filter_container.childNodes.forEach((el) => {
        if (el.nodeType == 3) {
          return;
        } else {
          if (el.classList.contains("active")) {
            el.classList.remove("active");
          }
        }
      });
      e.target.classList.add("active");
    } else {
      return;
    }
  });
}

initProg();
