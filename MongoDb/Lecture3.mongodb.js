use("DBMS1")

db.student.aggregate([
    { //match
        $match:{
            attendance:{
                $gte:80,
            }
        } 

    },
    
    { //group
        
        $group:{
            _id:"$course"

        }
        
    },

    // {//project

    // }
])