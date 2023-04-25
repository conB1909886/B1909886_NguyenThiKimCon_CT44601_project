const Image = require('../models/Image')
const getAll = async (req,res)=>{
    try{
        const data = await Image.find()
        res.status(200).json(data)
    }catch(error){
        res.status(500).json('Loi Server')
    }
}


const getDetail = async (req,res)=>{
    const id = req.params.id
    try{
        const data = await Image.findById(id)
        res.status(200).json(data)
    }catch(error){
        res.status(500).json('Loi server')
    }
}

const create = async (req,res)=>{
    try{
        const image = new Image(req.body)
        const data = await image.save()
        res.status(200).json(data)
    }catch(error){
        res.status(500).json("Loi server")
    }
}

const update = async (req,res)=>{
    const id = req.params.id
    try{
        const data = await Image.findByIdAndUpdate(id, {$set:req.body},{new:true})
        res.status(200).json("update successs")
    }catch(error){
        res.status(500).json("Loi server")
    }
}

const deleteMany = async (req,res)=>{
    try{
        const result = await Image.deleteMany()
        res.status(200).json("Delete many success")
    }catch(error){
        res.status(500).json("Loi server")
    }
}

const deleteOne = async (req,res)=>{
    const id = req.params.id
    try{
        const result = await Image.findByIdAndRemove(id)
        res.status(200).json('Delete success')
    }catch(error){
        res.status(500).json("Loi server")
    }
}

module.exports = {
   getAll,
   getDetail,
   create,
   update,
   deleteMany,
   deleteOne
}