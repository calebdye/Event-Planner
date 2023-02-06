const todoItem = document.querySelectorAll('span.not')
const guestItem = document.querySelectorAll('span.noGuest')
const todoComplete = document.querySelectorAll('span.completed')
const noGuest = document.querySelectorAll('span.confirmed')
const prints = document.querySelectorAll('span.fa-print')


Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

Array.from(noGuest).forEach((el)=>{
    el.addEventListener('click', guestNot) // This and complete are actually reveresed
})

Array.from(guestItem).forEach((el)=>{
    el.addEventListener('click', guestComplete) // This and complete are actually reveresed
})

Array.from(prints).forEach((el)=>{
    el.addEventListener('click', printout)
})


//Complete Functions

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

async function guestNot(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('guest/markIncomplete', {
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

  function openForm2() {
   const elements = document.getElementsByClassName('edit-container')
   for (const el of elements){
    el.style.display= "flex";
}
  }

  function closeForm2() {
    const elements = document.getElementsByClassName('edit-container')
    for (const el of elements){
     el.style.display= "none";
 }
  }