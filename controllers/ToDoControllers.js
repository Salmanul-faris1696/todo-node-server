const ToDoModels = require("../models/ToDoModels");

module.exports.getToDo = async (req,res) => {
    try {
        
        const toDo = await ToDoModels.find();
        res.send(toDo);
    } catch (error) {
            res.status(500).json({ error: "Failed to fetch tasks" });
    }
    
}

module.exports.saveToDo = async(req,res) =>{

    try {
        const { text } = req.body
        console.log({text});
        const toDo = await ToDoModels.create({text})
        res.status(200).json({
            "message":"added successfully",
            toDo
        })
    } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
    }
    
}

module.exports.updateTodo =async(req,res) => {
    try {
       const { _id , text } = req.body;
       console.log({_id,text});
       const toDo = await ToDoModels.findByIdAndUpdate( _id , {text}, {new:true});
       res.status(200).json({
        "message":"updated data successfully !!" ,toDo
       })

        
    } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
        
    }
}

module.exports.deleteToDo = async (req,res) =>{

    try {

        const id = req.params.id ;
        const toDo = await ToDoModels.findByIdAndDelete(id) 
        res.status(200).json({
            'message' :"delete the data successfully !" ,toDo

        })

        
    } catch (error) {
            res.status(500).json({ error: "Failed to delete task" });

        
    }
}