const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const guestItem = document.querySelectorAll('span.noGuest')
const editBtn = document.querySelectorAll('.edit')
const todoComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

Array.from(editBtn).forEach((el)=>{
    el.addEventListener('click', editTodo)
})

Array.from(guestItem).forEach((el)=>{
    el.addEventListener('click', guestComplete)
})

//Guest Functions

async function guestComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('guest/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


// Todo function
async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function editTodo(){
    const todoId = this.parentNode.dataset.id
    let newTodo = prompt('value')
    try{
        const response = await fetch('todos/editTodo', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId,
                'todoValue': newTodo || this.parentNode.childNodes[1].innerText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

//Function expression to select elements

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll('.nav-link');

selectElement('.burger-menu-icon').addEventListener('click', () => {
    selectElement('.nav-list').classList.toggle('active');
    selectElement('.burger-menu-icon').classList.toggle('toggle')

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${index/7 + 0.5}s`
        }
    })
});

navLinks.forEach(link => {
    link.addEventListener('click',() => {
        selectElement('.nav-list').classList.toggle('active');
        selectElement('.burger-menu-icon').classList.toggle('toggle');
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${index/7 + 0.5}s`
            }
        })
    })
})
