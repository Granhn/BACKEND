const express = require('express');

const app = express();

app.get('/hello/:username', (req,res) => {
    res.send(`Hello ${req.params.username}`);
})
app.get('/add/:x/:y', (req, res) => {
    const { x,y } = req.params;
    res.send(`Result: ${parseInt(x) + parseInt(y)}`)
});

app.get('/users/:username/photo', (req, res) => {
    if(req.params.username==="Diego") res.sendFile('./static/javascript.png',{ root: __dirname })
    else res.send('Usuario no permitido')
})

app.get('/name/:username/age/:age', (req, res) => {
    res.send(`El usuario ${req.params.username} tiene ${req.params.age} años`);
})


app.listen(3000);
console.log('Server on port 3000');

