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

// db.student.aggregate([
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
//])

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


// db.student.aggregate([
//     {$group:{
//         _id:"$course",
//         NumberOfStudents:{
//             $sum:1
//         }
//     }}
// ])

// db.student.aggregate([
//     {$group:{
//         _id:"$course",
//         Avg_ATTENDANCE:{
//             $avg:"$attendance"
//         }
//     }}
// ])


// db.student.aggregate([
//     {$group:{
//         _id:"$course",
//         Max_maths_marks:{
//             $max:"$marks.math"
//         },
//         Min_maths_marks:{
//             $min:"$marks.math"
//         },
//         avg_marks_maths:{
//             $avg:"$marks.math"
//         }
//     }}
// ])



// db.student.aggregate([
//     {$group:{
//         _id:"$city",
//         total_Students:{
//             $sum : 1
//         }
//     }}
// ])


// db.student.aggregate([
//     {
//         $match:{
//             "course":"CSE"
//         }
//     },
//     {
//         $group:{
//             _id:null,
//             avg_att:{
//                 $avg:"$attendance"
//             }
//         }
//     }
// ])


// db.student.aggregate([
//     {
//         $match:{
//             "course":"BCA"
//         }
//     },
//     {
//         $group: {
//           _id: null,
//           maxMatchMarks: {
//             $max: "$marks.math"
//           }
//         }
//     }
// ])


// db.student.aggregate([
//     {
//         $match:{
//             "course":"CSE",
//             "attendance":{
//                 $gt:80
//             }
//         }
//     },
//     {
//         $group: {
//           _id: null,
//           NumebrOfStudents: {
//             $sum: 1
//           }
//         }
//     }
// ])

db.student.aggregate([
    {
        $project: {
            name:1,
            totalMarks:{
                $add:["$marks.math","$marks.dbms","$marks.web"]
            }
        },
    },
    {
        $sort:{
            "totalMarks": 1,
        }
    }
])