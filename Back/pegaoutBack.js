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
        cb(null, 'kepek/')
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
app.use(express.static('kepek'))

app.get('/', (req,res)=>{
    res.send("OK");
});

app.get('/peugeotmodels', async (req,res)=>{
    const temp=await db.query('SELECT Model, Type, Year, Price, EngineType, RangeDistance, kepLink, id FROM peugeotmodels')
    const row=temp[0];
    const fields=temp[1];
    res.send(row)
})
app.get('/model/:id', async (req,res)=>{
    const temp=await db.query(`SELECT Model, Type, Year, Price, EngineType, RangeDistance, kepLink, id FROM peugeotmodels WHERE id=${req.params.id}`)
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
    let kepLink=req.file.filename;
    let result = await db.query(`SELECT Model, Type, Year, Price, EngineType, RangeDistance from peugeotmodels WHERE Model="${Model}" AND Type="${Type}" AND Year="${Year}" AND Price="${Price}" AND EngineType="${EngineType}" AND RangeDistance="${RangeDistance}"`);
    if(result[0].length==0){
        const temp=await db.query(
            `INSERT INTO peugeotmodels (Model,Type,Year,Price,EngineType,RangeDistance,kepLink) VALUES ("${Model}","${Type}","${Year}","${Price}","${EngineType}","${RangeDistance}","${kepLink}");`)
        res.sendStatus(200);
    }
    else{
        res.status(409).send("Már létezik az adott példány")
    }
})

/*app.delete("/peugeotmodels/:Model/:Type/:Year/:Price/:EngineType/:RangeDistance",async(req,res)=>{
    
})*/

app.listen(3000);