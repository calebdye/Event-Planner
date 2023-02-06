const Guest = require('../models/Guest')

module.exports = {
    getGuests: async (req,res)=>{
        console.log(req.user)
        try{
            const guest = await Guest.find({userId:req.user.id})
            const itemsLeft = await Guest.countDocuments({userId:req.user.id,completed: true})
            const sumGuests = await Guest.aggregate([{$match: {userId: req.user.id,completed: true}},{$group: {_id:null, sum_val:{$sum:"$num"}}}]) 
            res.render('guest.ejs', {guests: guest, sumGuests:sumGuests, left: itemsLeft, user: req.user, address: req.address, num:req.body.num})
        }catch(err){
            console.log(err)
        }
    },
    createGuest: async (req, res)=>{
        try{
            await Guest.create({guest: req.body.guest, notes:req.body.notes, completed: false, userId: req.user.id, address: req.body.address, num:req.body.num})
            console.log('Guest has been added!')
            //  res.redirect('/guest')
            res.redirect('back');
        }catch(err){
            console.log(err)
            console.log('errrrrrr')
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Guest.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
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
            await Guest.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    editGuest: async (req, res)=>{
        try{
            await Guest.findOneAndUpdate({_id:req.params.id},{
                guest: req.body.guest, 
                notes:req.body.notes, 
                address: req.body.address, 
                num:req.body.num
            })
            res.redirect('back')
        }catch(err){
            console.log(err)
        }
    },
    deleteGuest: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Guest.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Guest')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    