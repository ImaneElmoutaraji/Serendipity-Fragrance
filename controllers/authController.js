import { v4 as uuidv4 } from 'uuid';
import createCustomer from '../models/Customer.js';
uuidv4();
const register = async (req,res)=>{
    try {
        const {name,email,password} = req.body
        const id = uuidv4()
        console.log("customerID:",uuidv4(),)
        console.log("Name:",name)
        console.log("email:",email)
        console.log("password",password)
        const newCustomer = await createCustomer({id,name,email,password})
        return res.status(201).json({Message:"User Created"});
    }catch(error){
        console.log(error)
    }
}

export {register}