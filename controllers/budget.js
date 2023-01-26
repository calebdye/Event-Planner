const Budget = require('../models/Budget')


module.exports = {
    getBudget: async (req,res)=>{
        console.log(req.user)
        try{
            const budgetItem = await Budget.find({userId:req.user.id})
            //const itemsLeft = await Vendor.countDocuments({userId:req.user.id,completed: false})
            // res.render('vendor.ejs', {vendors: vendors, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createBudget: async (req, res)=>{
        try{
            await Budget.create({name: req.body.name, completed: false, cost:req.body.cost, userId: req.user.id, goal:req.body.goal})
            console.log('Vendor has been added!')
            res.redirect('/todos')//Refreshing todos because that is where this data is being pulled currently
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
            await Budget.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                name: req.body.todoValue,
                cost: req.body.cost
                // Need to update -- need to try and get all edit and delete functions on the same  main.js, use css classes and seperate functions probably
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
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