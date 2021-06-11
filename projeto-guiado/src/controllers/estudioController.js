const mongoose = require('mongoose')
const Estudio = require('../models/estudio')
const create = async (req, res)=>{
    const estudio = new Estudio({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        criadoEm: req.body.criadoEm
    }) 
    const estudioExiste = await Estudio.findOne({nome: req.body.nome})
    if(estudioExiste){
        return res.status(409).json({error: 'Estudio já cadastrado'})
    }
    
    try{
        const novoEstudio = await estudio.save()
        res.status(201).json({message: 'Novo estudio cadastrado com sucesso', novoEstudio})
    
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}

const getAll = async (req, res)=>{
    try{
        const estudios = await Estudio.find()
        return res.status(200).json(estudios)
    }catch(err){
        return res.status(500).json({message: message.err})
    } 
}

const deleteEstudio = async (req, res)=>{
    try{
        const estudio = await Estudio.findById(req.params.id)
        if(Estudio == null){
            return res.status(404).json({message: 'Estudio não encontrado'})
        }
        await estudio.remove()
        res.json({message: 'Estudio deletado com sucesso!'})
    
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}

const updateEstudio = async (re, res)=>{
    try{
        const estudio = await Estudio.findById(req.params.id)
        if(Estudio == null){
            return res.status(404).json({message: 'Estudio não encontrado'})
        }
        if(req.body.nome != null){
            estudio.nome = req.body.nome
        }
        const updateEstudio = await estudio.save()
        res.status(200).json({message: 'Alteração realizada com sucesso', updateEstudio})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    create,
    getAll,
    deleteEstudio,
    updateEstudio
}