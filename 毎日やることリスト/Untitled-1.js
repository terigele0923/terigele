const STORAGE_KEY = "todos"
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");          // タスク名テキスト
const startInput = document.getElementById("start-time");     // 開始時間
const endInput = document.getElementById("end-time");         // 終了時間
const list = document.getElementById("todo-list");

let todos = [];

document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    todos = saved ? JSON.parse(saved) : [];
    render();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();
    const startTime = startInput.value.trim();
    const endTime = endInput.value.trim();

    if (text === "" || startTime === "" || endTime === "") return;

    todos.push({ text, startTime, endTime, done: false });

    input.value = "";
    startInput.value = "";
    endInput.value = "";

    save();
    render();
});




function deleteTodo(index) {
    todos.splice(index, 1);
    save();
    render();
}

function toggleDone(index) {
    todos[index].done = !todos[index].done;
    save();
    render();
}

function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function render() {
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = todo.done ? "done" : "";

        const span = document.createElement("span");
        span.textContent = `${todo.text} [${todo.startTime} - ${todo.endTime}]`;
        span.style.cursor = "pointer";
        span.addEventListener("click", () => toggleDone(index));

        const delBtn = document.createElement("button");
        delBtn.textContent = "削除";
        delBtn.addEventListener("click", () => deleteTodo(index));

        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}
