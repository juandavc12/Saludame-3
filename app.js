const express = require('express');
const app = express();

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

app.use(express.urlencoded({ extended: true}));

app.get('/',  (req, res) => {
    res.send(`<form action ="/" method="post">
    <input type="text" name="name" />
    <button type="submit">Enviar</button>
    </form>`);

});

app.post('/', (req, res) => {
    const { name } = req.body;
    res.send(`<h1>Hola ${capitalize(name)}!</h1>`)
});

app.listen(3000, () =>{
    console.log('listening in port 3000');
    
})