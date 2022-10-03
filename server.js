const express = require('express')
const app = express()
let numOfBottles = 99



app.get('/', (req, res) => {
    res.send(`<h1>${numOfBottles} bottles of beer on the wall</h1>
    <h2><a href=${numOfBottles - 1}> Take one down, pass it around.</a></h2>`)
})



app.get('/:number_of_bottles', (req, res) => {

    if (req.params.number_of_bottles === '0') {
        res.send(`<a href='/'>Start Over</a>`)
    } else {
        res.send(`<h1>${req.params.number_of_bottles} bottles of beer on the wall.</h1><br>
        <h2><a href=${req.params.number_of_bottles - 1}> Take one down, pass it around.</a></h2>`)
    }
})



app.listen(3000, () => {
    console.log('I am listening on port 3000')
})