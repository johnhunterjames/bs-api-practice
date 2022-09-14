const express = require('express')
const app = express()
const PORT = 4000

let brawlers = {
    'nita': {
        'name': 'Nita'

    },
    'brock': {
        'name': 'Brock'
    },
    'unknown': {
        'name': 'Unknown'
    }
}

app.listen(PORT, (req, res) => {
    console.log(`Your server is now running on port ${PORT}.`)
})

app.get('/', (req, res) => [
    res.sendFile(__dirname + '/index.html')
])

app.get('/api/:name', (req, res) => {
    let brawlerName = req.params.name.toLocaleLowerCase()

    if(brawlers[brawlerName]){
        res.json(brawlers[brawlerName])
        console.log(brawlers[brawlerName])
    }
    else(res.json(brawlers['unknown']))
})