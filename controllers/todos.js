const Todo = require('../models/Todo')
const Guest = require('../models/Guest')
const Vendor = require('../models/Vendor')
const Budget = require('../models/Budget')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const vendorItems = await Vendor.find({userId:req.user.id})
            const budgetItems = await Budget.find({userId:req.user.id})
            const guestItems = await Guest.find({userId:req.user.id})
            const goal = await Budget.findOne({userId:req.user.id}) 
            const confirmedGuest = await Guest.countDocuments({userId:req.user.id,completed: true})
            const sum = await Budget.aggregate([{$match: {userId: req.user.id}},{$group: {_id:null, sum_val:{$sum:"$cost"}}}]) 
            const sumGuests = await Guest.aggregate([{$match: {userId: req.user.id,completed: true}},{$group: {_id:null, sum_val:{$sum:"$num"}}}]) 
            let realGoal = goal || 1;
            //let goalTotal = Math.round(Math.ceil((realSum/goal.goal)*100)/10)*10
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('todos.ejs', {todos: todoItems, sumGuests:sumGuests, guestConfirmed:confirmedGuest, guests:guestItems, goal:realGoal, sum:sum, left: itemsLeft, user: req.user, vendor: vendorItems, budget: budgetItems})
            //res.render('todos.ejs', {todos: todoItems, goal:goalTotal, left: itemsLeft, user: req.user, vendor: vendorItems, budget: budgetItems, sums:realSum})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
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
    editTodo: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                todo: req.body.todoValue
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    