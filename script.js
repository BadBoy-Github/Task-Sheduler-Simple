
// user can update task as completed and undone

let task = []
let resultElement = document.getElementById('result')

function renderTask(array) {
    resultElement.innerHTML = ""
    array.forEach((item, index) => {
        resultElement.innerHTML += `<div>
            <h1>${item}</h1>
            <button onClick="deleteTask(${index})">Delete</button>
        </div>`
    })
}

document.getElementById('addBtn').addEventListener('click', () => {
    let value = document.getElementById('taskInput').value.trim()
    if (value === "") {
        alert("Please enter a task")
        return
    }
    task.push(value)
    renderTask(task)
    document.getElementById('taskInput').value = ''
})

function deleteTask(index) {
    task.splice(index, 1)
    renderTask(task)
}

document.getElementById('searchInput').addEventListener('keyup', () => {
    let searchKey = document.getElementById('searchInput').value.trim().toLowerCase()

    let searchResult = task.filter( (item) => {
        return item.includes(searchKey)
    } )

    renderTask(searchResult)
})