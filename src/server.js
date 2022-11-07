import youtubeSearch from "../src/sync/youtube.js"
import cors from "cors";
import express from "express";
import * as http from "http";
import {MongoClient as mongo} from "mongodb";

//
// const express = require("express")
// const mongo = require("mongodb").MongoClient
// const cors = require('cors');
// const path = require('path');
// const fs = require('fs');
// const http = require('http');
// const https = require('https');
// const privateKey = fs.readFileSync('key.pem', 'utf8');
// const certificate = fs.readFileSync('cert.pem', 'utf8');

// const credentials = {key: privateKey, cert: certificate};

const app = express()

const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};

app.use(cors(corsOpts));
app.use(express.json())

app.get("/get-projects", async (req, res) => {
    let proj = projects.find({});

    proj.forEach((el) => {
        res.send({el})
    })
});

app.post("/contract-status", async (req, res) => {


    res.send({})
})

app.get("/youtube", async (req,res) => {
    youtubeSearch().then((result) => {
        console.log(result)
        res.send(result)
    })
});


const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
// httpsServer.listen(8443);

const url = "mongodb://localhost:27017"

let db, projects

mongo.connect(
    url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        db = client.db("mathlets")
        projects = db.collection("whitelists")

        projects.insertOne({
            name: "azuki"
        })

    }
)


