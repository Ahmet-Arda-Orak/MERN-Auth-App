import axios from "axios";

const signup = async(user) =>{
    const result = await axios.post("/auth/signup",user)
    return result;
}

const signin = async(user) =>{
    const result = await axios.post("/auth/signin",user);
    return result;
}

const hasSigned = async(user) =>{
    const result = await axios.get("/auth/hassignedin",user);
    return result;
} 

const signout = async(user) =>{
    const result = await axios.get("/auth/signout",user);
    return result;
} 

export {signin,signup,hasSigned,signout};