const express=require('express');
const app=express();
const path=require('path');
const cors=require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const db=require('./config/mongoose-connection');




const loginRoutes=require('./routes/AuthRoutes');
const ProjectRoutes=require('./routes/TaskRoutes');
const TaskRoutes=require('./routes/ProjectRoutes');






// app.use('/api',loginRoutes);
app.use('/api/users',loginRoutes);
app.use('/api/users/projects',ProjectRoutes);
app.use('/api/users/tasks',TaskRoutes);

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

db.on('connected',()=>{
    console.log("Mongoose connected to DB");
})
db.on('error',(err)=>{
    console.log("Mongoose connection error:",err);
});