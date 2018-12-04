const express = require('express')
const app = express();

app.get('/:operation/:num1/:num2', (req, res) => {
    let operations = ["add", "div", "sub", "mult"]
    if(isNaN(req.params.num1) === true){
        res.send(`${req.params.num1} (first parameter) is not a number, please input a number`)
    } else if(isNaN(req.params.num2) === true){
        res.send(`${req.params.num2} (second parameter) is not a number, please input a number`)          
    } else if(req.params.operation.toLowerCase() === "add"){
    res.send({
        num1: `${parseInt(req.params.num1)}`,
        num2: `${parseInt(req.params.num2)}`,
        result: `${parseInt(req.params.num1) + parseInt(req.params.num2)}`
    })
    } else if(req.params.operation.toLowerCase() === "sub"){
    res.send({
        num1: `${parseInt(req.params.num1)}`,
        num2: `${parseInt(req.params.num2)}`,
        result: `${parseInt(req.params.num1) - parseInt(req.params.num2)}`
    })
    } else if(req.params.operation.toLowerCase() === "mult"){
        res.send({
            num1: `${parseInt(req.params.num1)}`,
            num2: `${parseInt(req.params.num2)}`,
            result: `${parseInt(req.params.num1) * parseInt(req.params.num2)}`
        })
    } else if(req.params.operation.toLowerCase() === "div"){
        res.send({
            num1: `${parseInt(req.params.num1)}`,
            num2: `${parseInt(req.params.num2)}`,
            result: `${(parseInt(req.params.num1) / parseInt(req.params.num2)).toFixed(3)}`
        })
    } else if (operations.includes(req.params.operation) === false) {
        res.send(`${req.params.operation} is not a correct operation. \nPlease use /add, /div, /sub, /mult`)
    } 
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})