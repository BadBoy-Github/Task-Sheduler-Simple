
// user can update task as completed and undone

let task = []
let resultElement = document.getElementById('result')

function renderTask(array) {
    resultElement.innerHTML = ""
    array.forEach((item, index) => {
        resultElement.innerHTML += `<div>
            <h1><input type="checkbox" onChange="toggleComplete(${item["id"]})" ${item["isCompleted"] ? "checked" : ""} >${item["name"]} ${item["isCompleted"] ? "- Completed" : ""}</h1>
            <button onClick="deleteTask(${item["id"]})">Delete</button>
        </div>`
    })
}

document.getElementById('addBtn').addEventListener('click', () => {
    let value = document.getElementById('taskInput').value.trim()
    let obj = {id: Date.now(), name: value, isCompleted: false}
    if (value === "") {
        alert("Please enter a task")
        return
    }
    task.push(obj)
    renderTask(task)
    document.getElementById('taskInput').value = ''
})

function deleteTask(taskId) {
    task = task.filter(item => item["id"] != taskId)
    renderTask(task)
}

document.getElementById('searchInput').addEventListener('keyup', () => {
    let searchKey = document.getElementById('searchInput').value.trim().toLowerCase()

    let searchResult = task.filter( (item) => {
        return item["name"].includes(searchKey)
    } )

    renderTask(searchResult)
})

function toggleComplete(taskId) {
    task.map((item) => {
        if (item["id"] == taskId) {
            item["isCompleted"] = !item["isCompleted"]
            return item
        } else {
            return item
        }
    })

    renderTask(task)
}
