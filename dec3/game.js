const express = require('express')
const app = express();

app.get('/:userChoice', (req, res) => {
    let randomAi = Math.floor(Math.random() * 3)
    const rock = [{user:"rock",ai:"rock",result:"draw"}, 
    {user:"rock", ai:"paper", result:"lose"},
    {user:"rock", ai:"scissors", result:"win"}]

    const paper = [{user:"paper",ai:"rock",result:"win"}, 
    {user:"paper", ai:"paper", result:"draw"},
    {user:"paper", ai:"scissors", result:"lose"}]

    const scissors = [{user:"scissors",ai:"rock",result:"lose"}, 
    {user:"scissors", ai:"paper", result:"win"},
    {user:"scissors", ai:"scissors", result:"draw"}]

    if(req.params.userChoice === "rock"){
        res.send(`You chose ${req.params.userChoice},\nAI chose ${rock[randomAi].ai} \nYou ${rock[randomAi].result}`)
    } else if(req.params.userChoice === "paper"){
        res.send(`You chose ${req.params.userChoice},\nAI chose ${paper[randomAi].ai} \nYou ${paper[randomAi].result}`)
    } else if(req.params.userChoice === "scissors"){
        res.send(`You chose ${req.params.userChoice},\nAI chose ${scissors[randomAi].ai} \nYou ${scissors[randomAi].result}`)
    } else{
        res.send("Type in a valid input \nValid Inputs are /rock, /paper, /scissors")
    }

})

app.listen(8000, () => {
    console.log("Listening to port 8000");
})