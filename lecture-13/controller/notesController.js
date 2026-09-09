const { notes } = require("../models/data")

const getNotes = (req,res)=>{
    res.status(200).send(notes)
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