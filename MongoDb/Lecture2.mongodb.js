use("DBMS1")

// to find the count of retreving documents
// db.student.find().count()

// to find the documents by skipping and limitng(pagination)
// db.student.find().skip(1).limit(2)

// db.student.find({},{
//     // value for main _id is alwasy by default 1 TRUE and others parameter have 0. to remove it we can put the _id value 0.
//     studentId:1,
//     name:1,
//     course:1
// })

// db.student.find({"age":{$lte:18}},{
//     _id : 0,
//     studentId : 1,
//     course :1,
//     attendance:1,
//     marks:1


// })

//RANGE settng to find the data 

// db.student.find({"attendance":{
//     $gte:80,
//     $lt:90
// }})
