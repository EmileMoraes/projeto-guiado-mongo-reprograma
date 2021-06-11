const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const createTitle = async (req, res)=>{
    const titulo = new Titulo({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome.toUpperCase(),
        genero: req.body.genero,
        descricao: req.body.descricao,
        estudio: req.body.estudio
    })
    
    const tituloExiste = await Titulo.findOne({nome: req.body.nome}) 
    if(tituloExiste){
        return res.status(409).json({error: 'Filme já cadastrado'})
    }
    try{
        const novoTitulo = await titulo.save()
        res.status(201).json({message: 'Novo titulo cadastrado com sucesso', novoTitulo})
    }catch(err) {
        return res.statua(400).json({message: error.message})
    }
}

const showTitle = async (req, res)=>{
    try{
        const titulos = await Titulo.find().populate('estudio', {nome: 1})
        return res.status(200).json(titulos)
    }catch(err){
        return res.status(500).json({message: message.err})
    } 
}
const marvelTitles = async (req, res)=>{
    const titulos = await Titulo.find().populate('estudio')
    const titleFiltrado = titulos.filter( titulo => titulo.estudio.nome == 'Marvel')
    return res.status(200).json({message: 'Todos os titulos da Marvel', titleFiltrado})
}

const pixarTitles = async (req, res)=>{
    const titulos = await Titulo.find().populate('estudio')
    const titleFiltrado = titulos.filter( titulo => titulo.estudio.nome == 'Pixar')
    return res.status(200).json({message: 'Todos os titulos da Pixar', titleFiltrado})
}

const disneyTitles = async (req, res)=>{
    const titulos = await Titulo.find().populate('estudio')
    const titleFiltrado = titulos.filter( titulo => titulo.estudio.nome == 'Disney')
    return res.status(200).json({message: 'Todos os titulos da Pixar', titleFiltrado})
}

const deleteTitle = async (req, res)=>{
    try{
        const titulo = await Titulo.findById(req.params.id)
        if(Titulo == null){
            return res.status(404).json({message: 'Titulo não encontrado'})
        }
        await titulo.remove()
        res.json({message: 'Titulo deletado com sucesso!'})

    }catch(err){
        return res.status(500).json({message: err.message})
    }
}

const updateTitle = async (req, res)=>{
    try{
        const titulo = await Titulo.findById(req.params.id)
        if(Titulo == null){
            return res.status(404).json({message: 'Titulo não encontrado'})
        }
        if(req.body.nome != null){
            titulo.nome = req.body.nome
        }
        if(req.body.genero != null){
            titulo.genero = req.body.genero
        }
        if(req.body.descricao != null){
            titulo.descricao = req.body.descricao
        }
        if(req.body.estudio != null){
            titulo.estudio = req.body.estudio
        }

        const updateTitle = await titulo.save()
        res.status(200).json({message: 'Alteração realizada com sucesso', updateTitle})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    createTitle,
    showTitle,
    marvelTitles,
    pixarTitles,
    disneyTitles,
    deleteTitle,
    updateTitle
}