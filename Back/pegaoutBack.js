import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import {unlink} from 'fs';
import 'dotenv/config'
import { cwd } from "process";

const app=express();
let jsonParser=bodyParser.json();

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/')
    },
    filename: function (req, file, cb){
        const uniqueSuffix=Date.now() + '-' + Math.round(Math.random()*1E9)
        cb(null, file.originalname)
    }
})
const upload=multer({storage});

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password: process.env.password,
    database:'pejodatabase',
    port:process.env.port
}).promise();

app.use(cors());
app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.send("OK");
});

app.get('/peugeotmodels', async (req,res)=>{
    const temp=await db.query('SELECT Model, Type, Year, Price, EngineType, RangeDistance, kepLink FROM peugeotmodels')
    const row=temp[0];
    const fields=temp[1];
    res.send(row)
})

app.post('/upload', upload.single('image'),async (req,res,next)=>{
    let Model=req.body.Model;
    let Type=req.body.Type;
    let Year=req.body.Year;
    let Price=req.body.Price;
    let EngineType=req.body.EngineType;
    let RangeDistance=req.body.RangeDistance;
    let kepLink=req.body.kepLink;
    let result = await db.query('SELECT Model, Type, Year, Price, EngineType, RangeDistance from peugeotmodels WHERE Model="${Model}", Type="${Type}", Year="${Year}", Price="${Price}", EngineType="${EngineType}", RangeDistance="${RangeDistance}",');
    if(result[0].length==0){
        const temp=await db.query(
            `INSERT INTO peugeotmodels (Model,Type,Year,Price,EngineType,RangeDistance)
            VALUES ("${req.body.Model}","${req.body.Type}","${req.body.Year}","${req.body.Price}","${req.body.EngineType}","${req.body.RangeDistance}";)`)
        res.sendStatus(200);
    }
    else{
        res.sendStatus(400).send("Már létezik az adott példány")
    }
})

app.delete("/peugeotmodels/:Model/:Type/:Year/:Price/:EngineType/:RangeDistance",async(req,res)=>{
    
})

app.listen(3000);