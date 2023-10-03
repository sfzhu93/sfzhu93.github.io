let todoList = [];
const todoListElement = document.getElementById("todo-list");
const countdownElement = document.getElementById("countdown");
const startTimerButton = document.getElementById("start-timer");

const DEBUG_MODE = false; // Set to false for production
const intervalRate = 1000;

let interval;
const TaskType = {
    WORK: 0,
    BREAK: 1,
}

document.getElementById("add-todo").addEventListener("click", () => {
    const todo = prompt("What's the next todo?");
    if (todo) {
        todoList.push(todo);
        updateUI();
    }
});

startTimerButton.addEventListener("click", () => {
    if (todoList.length === 0) {
        alert("No todos left!");
        return;
    }
    
    startTimerButton.disabled = true;
    startCountdown(25*60, TaskType.WORK);
});

function updateUI() {
    todoListElement.innerHTML = "";
    todoList.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo;
        todoListElement.appendChild(li);
    });
}

function showNotification(message) {
    new Notification(message, {
        icon: "icon.png",
    });
}

function startCountdown(seconds, task) {
    let time = seconds;
    clearInterval(interval); // Clear any existing intervals
    interval = setInterval(() => {
        minutes = parseInt(time / 60, 10);
        seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownElement.textContent = minutes + ":" + seconds;
        time -= DEBUG_MODE ? 100 : 1;  // Decrement the time faster if in debug mode

        if (time < 0) {
            clearInterval(interval);
            if (task === TaskType.WORK) {
                showNotification("Time for a break!");
                startCountdown(5 * 60, TaskType.BREAK);
            } else if (task === TaskType.BREAK) {
                next_task = todoList.shift();
                if (next_task) {
                    showNotification(`Time to ${next_task}!`);
                    startTimerButton.disabled = false;
                    countdownElement.textContent = "25:00";
                } else {
                    showNotification("No more todos!");
                }
            }
        }
    }, intervalRate);
}

Notification.requestPermission().then(permission => {
    if (permission === "granted") {
        new Notification("Notifications enabled!");
    } else {
        alert("Please enable notifications to use the timer feature.");
    }
});