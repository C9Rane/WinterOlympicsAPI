const express = require("express");
const server = express();
const mysql = require("mysql2");
const dotenv = require("dotenv");
const PORT = 5555;

dotenv.config();

const connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
});

server.use(express.json());

server.get("/athletes", (req, res) => {
    connection.query(`SELECT * FROM athletes`, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500);
            res.end("Server Error: Error with DataBase");
        } 
        res.status(200);
        res.json(data);
    })
});

server.put("/athletes/:id", (req, res) => {
    const {id} = req.params;
    const updateData = req.body

    connection.query(`UPDATE athletes SET Name = ? WHERE AthleteID = ?;`, [updateData.Name, id], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500);
            res.end("Server Error: Error with DataBase");
        } 
        res.status(200);
        res.json(data);
    })
})

server.post("/athletes/:id", (req, res) => {
    try {
        const body = req.body;
        console.log(body);
        res.status(200);
        res.json(body);
        
    } catch (err){
        next(err);
    }
});

server.delete("/athletes/:id", (req, res) => {
    const {id} = req.params;
    const updateData = req.body

    connection.query(`DELETE FROM athletes WHERE AthleteID = ?;`, [updateData.Name, id], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500);
            res.end("Server Error: Error with DataBase");
        } 
        res.status(200);
        res.json(data);
    })
})

server.use((err, req, res, next) => {
    if (err){
        console.error(err);
        res.status(500);
        res.end("Server Error");
    }
})

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});