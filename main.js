const express = require('express')
const superheroes = require('superheroes')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/identitas', (req, res) => {
    // console.log(req.query)
    const nama = req.query.nama
    const alamat = req.query.alamat
    if (nama == undefined || alamat == undefined) {
        res.send('data yang anda kirimkan kurang lengkap')
        return
    }
    res.send('namamu adalah ' + nama + ', dari ' + alamat)
})

app.get('/random-superheroes', (req, res) => {
    const randSuperheroes = superheroes.random()
    res.send('Superhero anda adalah ' + randSuperheroes)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})