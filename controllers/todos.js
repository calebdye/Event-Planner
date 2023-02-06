const Todo = require('../models/Todo')
const Guest = require('../models/Guest')
const Vendor = require('../models/Vendor')
const Budget = require('../models/Budget')

module.exports = {
    getTodos: async (req,res)=>{
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user, })
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id, note:req.body.note})
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    edTodo: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.params.id},{
                todo: req.body.todoItem,
                note: req.body.note
            })
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        try{
            await Todo.findOneAndDelete({_id:req.params.id})
            console.log('Deleted Todo')
            //res.json('Deleted It')
            res.redirect('back')
        }catch(err){
            console.log(err)
        }
    }
}    