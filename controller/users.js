import {v4 as uuid} from "uuid";
let users = [];

export const getUsers = (req,res) =>{
    res.send(users);
};

export const createUser = (req,res) =>{
    const user = req.body;
    users.push({...user, id:uuid()});
    res.send('User added successfully');
};

export const getUser = (req,res)=>{
    const singleUser = users.filter((user)=>user.id === req.params.id);
    res.send(singleUser);
};

export const deleteUser = (req,res) =>{
    users = users.filter((user)=>user.id !==req.params.id);
    res.send("User deleted successfully");
};

export const updateUser = (req,res) =>{
    const user = users.find((user)=>user.id === req.params.id);
    res.send(user);
    user.firstname = req.body.firstname;
    user.middlename = req.body.middlename;
    user.email = req.body.email;

    res.send("User updated successfully");
};