const Vendor = require('../models/Vendor')


module.exports = {
    getVendors: async (req,res)=>{
        console.log(req.user)
        try{
            const vendors = await Vendor.find({userId:req.user.id})
            const itemsLeft = await Vendor.countDocuments({userId:req.user.id,completed: false})
             res.render('vendor.ejs', {vendors: vendors, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createVendor: async (req, res)=>{
        try{
            await Vendor.create({name: req.body.name, completed: false, userId: req.user.id, address:req.body.address, type: req.body.type, number:req.body.number, cost:req.body.cost})
            console.log('Vendor has been added!')
            res.redirect('back');
                }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Vendor.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
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
    editVendor: async (req, res)=>{
        try{
            await Vendor.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                todo: req.body.vendors
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    deleteVendor: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Vendor.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    