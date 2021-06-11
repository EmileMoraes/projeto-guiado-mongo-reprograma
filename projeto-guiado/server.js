const express = require("express")
const app = express()

//conectar database
const db = require("./src/data/database")
db.connect()

app.use(express.json())

const tituloRouter = require('./src/routes/titulosRoutes')
const estudioRouter = require('./src/routes/estudiosRoutes')

app.use('/titulos', tituloRouter)
app.use('/estudios', estudioRouter)

const PORT = 3472
app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`))