const Pic = require('../models/pic')

module.exports={
    addPhoto: async (req,res)=>{
        const body = req.body
        const newPic = new Pic(body)
        await newPic.save()
        res.status(200).json({
            msg: "Pic Added"
        })

    },
    deletePhotos: async (req,res)=>{
        const body = req.body
        const id = body.id
        const data = await Pic.findOne({_id:id})
        if(!data){
            req.status(200).json({
                msg: "pic not found"
            })
        }
        const data2 = await Pic.findOneAndUpdate({id:id},{$set:{body}})
        res.status(200).json({
            msg:"updated"
        })

    },
    allPhotos: async (req,res)=>{
        const data = await Pic.find()
        res.status(200).json(data)
    }
}