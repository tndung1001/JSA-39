// let userId = "asdkafk21msfd"
// let darkMode = true

// localStorage.setItem("user_id_local", userId)
// localStorage.setItem("dark_mode", darkMode)

// let data = localStorage.getItem("user_id_local")
// console.log(data)

let todoList = []
let inputTodo = document.querySelector("#inputTodo")
let submit = document.querySelector("#submit")
let todoListDOM = document.querySelector(".todoList")

function addTodo(event) {
    event.preventDefault()
    let inputValue = inputTodo.value
    if (inputValue.trim()) {
        todoList.push(inputValue)
        localStorage.setItem("todoList", JSON.stringify(todoList))
        inputTodo.value = ''
        showTodo()
    }
}

function showTodo() {
    let todoListData = JSON.parse(localStorage.getItem("todoList"))
    if (todoListData) {
        todoList = todoListData
        let htmls = ""
        for (let i = 0; i < todoListData.length; i++) {
            htmls += `<li>${todoListData[i]}</li>`
        }
        todoListDOM.innerHTML = htmls
    }
}

submit.addEventListener("click", function(event) {
    addTodo(event)
})

showTodo()
