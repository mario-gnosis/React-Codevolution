const express = require('express');
const app = express();

app.use(express.static(__dirname +  '/public' ));

const users = [
    {
        "nome": "Mário"
    },
    {
        "nome": "Ana Luiza"
    },
    {
        "nome": "Marronzinho"
    },
    {
        "nome": "Billy"
    }
];

app.get('/api/users', (req, res) =>{
    res.json({
        users: users
    });
});