const Budget = require('../models/Budget')


module.exports = {
    getBudget: async (req,res)=>{
        console.log(req.user)
        try{
            const sum = await Budget.aggregate([{$match: {userId: req.user.id}},{$group: {_id:null, sum_val:{$sum:"$cost"}}}]) 
            const budgetItem = await Budget.find({userId:req.user.id})
            //const itemsLeft = await Vendor.countDocuments({userId:req.user.id,completed: false})
             res.render('budget.ejs', {budget: budgetItem, sum: sum, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createBudget: async (req, res)=>{
        try{
            await Budget.create({name: req.body.name, completed: false, cost:req.body.cost, userId: req.user.id, goal:req.body.goal, note: req.body.note})
            console.log('Vendor has been added!')
            res.redirect('back');
        }catch(err){
            console.log(err)
        }
  
    },
    markComplete: async (req, res)=>{
        try{
            await Budget.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
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
            await Vendor.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    editBudget: async (req, res)=>{
        try{
            await Budget.findOneAndUpdate({_id:req.params.id},{
                name: req.body.name, 
                cost:req.body.cost, 
                goal:req.body.goal, 
                note: req.body.note
            })
            res.redirect('back')
        }catch(err){
            console.log(err)
        }
    },
    deleteBudget: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Budget.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    