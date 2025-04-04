

let task = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : []
let resultElement = document.querySelector('#result')

function renderTask(array) {
    resultElement.innerHTML = ""
    array.forEach((item) => {
        let divElement = document.createElement('div')
        divElement.innerHTML += `<h1><input type="checkbox" ${item["isCompleted"] ? "checked" : ""} >${item["name"]} ${item["isCompleted"] ? "- Completed" : ""}</h1>
            <button>Delete</button>`

        divElement.querySelector('input').addEventListener('change', () => {
            toggleComplete(item["id"])
        })

        divElement.querySelector('button').addEventListener('click', () => {
            deleteTask(item["id"])
        })

        resultElement.appendChild(divElement)
    })
}

renderTask(task)

document.getElementById('addBtn').addEventListener('click', () => {
    let value = document.getElementById('taskInput').value.trim()
    let obj = {id: Date.now(), name: value, isCompleted: false}
    if (value === "") {
        alert("Please enter a task")
        return
    }
    task.push(obj)
    localStorage.setItem('task', JSON.stringify(task))
    renderTask(task)
    document.getElementById('taskInput').value = ''
})

function deleteTask(taskId) {
    task = task.filter(item => item["id"] != taskId)
    localStorage.setItem('task', JSON.stringify(task))
    renderTask(task)
}

document.getElementById('searchInput').addEventListener('keyup', () => {
    let searchKey = document.getElementById('searchInput').value.trim().toLowerCase()

    let searchResult = task.filter( (item) => {
        return item["name"].toLowerCase().includes(searchKey)
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
    localStorage.setItem('task', JSON.stringify(task))
    renderTask(task)
}

