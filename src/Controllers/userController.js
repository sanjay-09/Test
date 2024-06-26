const userService=require("../Services/userService");
const userServiceObject=new userService();
const signUp=async(req,res)=>{
    try{
        const response=await userServiceObject.signup(req.body);
        return res.status(200).json({
            data:response,
            status:true,
            message:"Created the user",
            err:{}

        })


    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Cannot signUp",
            err:err.message
        })


    }

}
const signIn=async(req,res)=>{
    try{
           const response=await userServiceObject.logIn(req.body);
           return res.status(200).json({
            data:response,
            status:false,
            message:"login successfully",
            err:{}
            
           })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Cannot authenticate",
            err:{err}
        })
    }
}
module.exports={
    signUp,
    signIn
}
