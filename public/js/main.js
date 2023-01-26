const deleteBtn = document.querySelectorAll('.del')
const delBudget = document.querySelectorAll('.delBudget')
const delGuest = document.querySelectorAll('.delGuest')
const delVendor = document.querySelectorAll('.delVendor')
const todoItem = document.querySelectorAll('span.not')
const guestItem = document.querySelectorAll('span.noGuest')
const editBtn = document.querySelectorAll('.edit') //need to be updated for todo
const editGuests = document.querySelectorAll('.editGuest')
const editCost = document.querySelectorAll('.editBudget')
const todoComplete = document.querySelectorAll('span.completed')
const prints = document.querySelectorAll('span.fa-print')

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

Array.from(editGuests).forEach((el)=>{
    el.addEventListener('click', editGuest)
})

Array.from(editCost).forEach((el)=>{
    el.addEventListener('click', editBudget)
})

Array.from(delBudget).forEach((el)=>{
    el.addEventListener('click', deleteBudget)
})

Array.from(delGuest).forEach((el)=>{
    el.addEventListener('click', deleteGuest)
})

Array.from(delVendor).forEach((el)=>{
    el.addEventListener('click', deleteVendor)
})

Array.from(prints).forEach((el)=>{
    el.addEventListener('click', printout)
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

async function deleteBudget(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('budget/deleteBudget', {
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

async function deleteGuest(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('guest/deleteGuest', {
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

async function deleteVendor(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('vendor/deleteVendor', {
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
   // let newTodo = prompt('value')
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

async function editBudget(){
    const todoId = this.parentNode.dataset.id
    let newTodo = prompt('New Name')
    let cost = prompt('cost')
    try{
        const response = await fetch('budget/editBudget', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId,
                'todoValue': newTodo || this.parentNode.childNodes[1].innerText,
                'cost': cost || this.parentNode.childNodes[1].innerText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function editVendor(){
    const todoId = this.parentNode.dataset.id
    let newTodo = prompt('value')
    try{
        const response = await fetch('vendor/editTodo', {
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

async function editGuest(){
    const todoId = this.parentNode.dataset.id
    let newTodo = prompt('Name')
    let newAddress = prompt('Address')
    let newNum = prompt('Party Size')
    let newNotes = prompt('New Notes')
    try{
        const response = await fetch('guest/editTodo', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId,
                'todoValue': newTodo,
                'addressValue': newAddress,
                'newNum': newNum,
                'newNotes': newNotes 
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



//Functions for nav bar

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



//Print function for lists
async function printout() {

    var newWindow = window.open();
    newWindow.document.write(document.getElementById("content").innerHTML);
    newWindow.print();
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }