const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let users = [
    {
        id: 1,
        nome: "Luiz",
        address: "Endereço doido",
        birthdate: "10/08/2002",
    },
];

//API GET-----------------------------------------------------------
app.get("/", (req, res) => {
    res.json(users);
});

//API GET USER------------------------------------------------------
app.get("/:id", (req, res) => {
    const userID = req.params.id;
    const user = users.find((user) => Number(user.id) === Number(userID));

    if (!user) {
        return res.json("User not found!");
    }

    res.json(user)
});

//API POST----------------------------------------------------------
app.post("/", (req, res) => {
    let lastId;
    if (users.length == 0) {
        lastId = 0;
    } else lastId = users[users.length - 1].id;

    if (!req.body.name) {
        res.send("name is required");
    } else {
        users.push({
            id: lastId + 1,
            name: req.body.name,
            address: req.body.address ? req.body.address : "Not specified",
            birthdate: req.body.birthdate ? req.body.birthdate : "Not specified",
        });

        res.json(`User ${req.body.name} successfully added`);
    }
});

//API PUT-----------------------------------------------------------
app.put("")

//API DELETE--------------------------------------------------------
app.delete("/:id", (req, res) => {
    const userIDParam = req.params.id

    users = users.filter(user => {
        user.id !== userIDParam
    })

    res.json(`User successfully deleted`)
});1

app.listen(port, () => {
    console.log("------------------=------------------");
    console.log(` Servidor Iniciado na porta: ${port} `);
    console.log("------------------=------------------");
});
