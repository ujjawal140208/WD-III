use("DBMS1")

// db.student.aggregate([
//     { //match
//         $match:{
//             attendance:{
//                 $gte:80,
//             }
//         } 

//     },
    
//     { //group
        
//         $group:{
//             _id:"$course"

//         }
        
//     },

//     // {//project

//     // }
// ])

// db.student.find(
//     {"course":"CSE"}
// )

db.student.aggregate([
    // {$group: {
    //   _id: "$age",
    // }}\
    // {$match: {
    //     "course":"CSE"
    // }}
    
    // {$project: { //by default all values in projection is 0 
    //              //and value of _id is 1
    //   name:1,
    //   course:1
    // }}
])

// db.student.aggregate([
//     {$match:{
//         "attendance":{
//             $gt:85
//         } 
//     }}
// ])

// db.student.aggregate([
//     {$match: {
//       "course":"BCA",
//       "attendance":{
//         $gt:80
//       }
//     }}
// // ])

// db.student.aggregate([
//     {$match:{
//         "marks.math":{
//             $gt:80
//         }
//     }}
// ])


db.student.aggregate([
    {$group:{
        _id:"$course",
        NumberOfStudents:{
            $sum:1
        }
    }}
])