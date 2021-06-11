const mongoose = require("mongoose")

const tituloSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    estudio: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'estudio' // chama o estudio.js para referenciar em qual estudio o filme se encaixa
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    },

})
module.exports = mongoose.model("titulo", tituloSchema)
