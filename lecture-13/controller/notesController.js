const { notes } = require("../models/data")

const getNotes = (req,res)=>{
    try{
        res.status(200).send(notes)
    }catch(err){
        console.log("aa thuuuu abey chal")
        res.status(500).send(err)
    }
}

const createNotes = (req,res)=>{
    let {title,description,link,author,note,date} = req.body

    let newData = {
        id:notes.length +1,
        title:title,
        description:description,
        link:link,
        author:author,
        date:date,
        note:note
    }

    notes.push(newData);
    res.status(201).send("notes added succesfully")
}

module.exports = {getNotes, createNotes}