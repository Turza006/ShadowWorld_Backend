const Admin = require("../models/admin")



module.exports={
    createAdmin : async (req,res)=>{
        const body = req.body
        const username = body.username
        const email = body.email
        const password = body.password
        const adminexist = await Admin.find()
        if(!adminexist){
            res.status(409).json({
                msg:"Admin Already exist"
            })
        }else{
            const newAdmin = new Admin()
            newAdmin.username = username
            newAdmin.email = email
            newAdmin.password = newAdmin.hashPassword(password)
            await newAdmin.save()
            res.status(200).json({
                msg:"Admin Created"
            })
        }
    },
    login: async (req,res)=>{
        const body = req.body
        console.log(body)
        const email = body.email
        const password = body.password
        const data = await Admin.findOne({email:email})
        if(!data){
            res.status(200).json({
                msg:"Admin Not Exist"
            })
        }
        else {
            const passwordVaildation = data.validPassword(password)
            if(!passwordVaildation){
                res.status(200).json({
                    msg:"Password Mismatched"
                })
            }else {
                res.status(200).json({
                    msg:"Login Success"
                })
            }
        }
    }

}