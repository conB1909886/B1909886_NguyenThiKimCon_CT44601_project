const Food = require('../models/Food')
const getAll = async (req,res)=>{
    try{
        const data = await Food.find()
        res.status(200).json(data)
    }catch(error){
        res.status(500).json('Loi server')
    }
}

const getDetail = async (req,res)=>{
    const id = req.params.id
    try{
        const data = await Food.findById(id)
        res.status(200).json(data)
    }catch(error){
        res.status(500).json('Loi server')
    }
}

const create = async (req,res)=>{
    try{
        const food = new Food(req.body)
        const result = await food.save()
        res.status(200).json(result)
    }catch(error){
        res.status(500).json("Loi server")
    }
}

const update = async (req,res)=>{
    const id = req.params.id
    try{
        const result = await Food.findByIdAndUpdate(id,{$set: req.body},{new:true})
        res.status(200).json(result)
    }catch(error){
        res.status(500).json("Loi server")
    }
}

const deleteMany = async (req,res)=>{
    try{
        const result = await Food.deleteMany()
        res.status(200).json("Delete many success")
    }catch(error){
        res.status(500).json('Loi server')
    }
}

const deleteOne = async (req,res)=>{
    const id = req.params.id
    try{
        const result = await Food.findByIdAndRemove(id)
        res.status(200).json('Delete success')
    }catch(error){
        res.status(500).json('Loi server')
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