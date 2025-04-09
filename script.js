const todoList = document.getElementById("todoList");

let todos = {};

const statuses = {
  stopped: "red",
  started: "yellow",
  finished: "green",
  delete: "darkred",
};

let db = 0;

const templateCode = `<div data-id="%id%" style="border-color: %color%">
  <p>
    %id%. %value%
  </p>
  <select>
    <option value="stopped" %stop%>Nincs elkezdve</option>
    <option value="started" %start%>Folyamatban</option>
    <option value="finished" %finish%>Kész</option>
    <option value="delete" %delete%>Törlés</option>
  </select>
  <button style="display: %btn%">Biztos törlöd?</button>
</div>`;

function makeTodos() {
  Array.from(todoList.children).forEach((child) => {
    child.removeEventListener("change", () => {});
  });

  todoList.innerHTML = "";
  Object.values(todos).forEach((todo) => {
    const newTodo = templateCode
      .replace(/%id%/g, todo.id)
      .replace(/%value%/g, todo.value)
      .replace(/%color%/g, statuses[todo.status])
      .replace(/%stop%/g, todo.status == "stopped" ? "selected" : "")
      .replace(/%start%/g, todo.status == "started" ? "selected" : "")
      .replace(/%finish%/g, todo.status == "finished" ? "selected" : "")
      .replace(/%delete%/g, todo.status == "delete" ? "selected" : "")
      .replace(/%btn%/g, todo.status == "delete" ? "block" : "none");
    todoList.innerHTML += newTodo;
  });
  Array.from(todoList.children).forEach((child) => {
    child.children[1].addEventListener("change", (event) => {
      const selectedValue = event.target.value;
      todos[child.getAttribute("data-id")].status = selectedValue;
      makeTodos();
    });
    child.children[2].addEventListener("click", (event) => {
      delete todos[child.getAttribute("data-id")];
      makeTodos();
    });
  });
}

function display() {
  db++;
  const inp = document.getElementById("todo").value;
  todos[db] = {
    id: db,
    value: inp,
    status: "stopped",
  };
  makeTodos();
}
