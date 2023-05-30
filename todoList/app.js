var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todos = document.querySelector('.todos')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    let value = input.value.trim()
    if (value) {
        addTodoElement({
            text: value,
        })
        saveTodoList()
    }
    input.value = ''
})

function addTodoElement(todo) {
    console.log(todo)
    // <li>
    //     <span>TEST</span>
    //     <i class="fa-regular fa-trash-can"></i>
    // </li>
    var li = document.createElement('li')
    li.innerHTML = `
                        <span>${todo.text}</span>
                         <i class="fa-regular fa-trash-can"></i>
                    `
    if (todo.status === 'complated') {
        li.setAttribute('class', 'complated')
    }
    li.addEventListener('click', function () {
        this.classList.toggle('complated')
        saveTodoList()
    })
    li.querySelector('i').addEventListener('click', function () {
        this.parentElement.remove()
        saveTodoList()
    })
    todos.appendChild(li)
}
function saveTodoList() {
    let todoList = document.querySelectorAll('li')
    todoStorage = []
    todoList.forEach(function (item) {
        let text = item.querySelector('span').innerText
        let status = item.getAttribute('class')

        todoStorage.push({
            text,
            status
        })
    })
    localStorage.setItem('todolist', JSON.stringify(todoStorage))
    // console.log(JSON.parse(localStorage.getItem('todolist')))
    // console.log(localStorage.getItem('todolist'))

}

function init() {
    let data = JSON.parse(localStorage.getItem('todolist'))
    data.forEach(function (item) {
        addTodoElement(item)
    })
}
init()