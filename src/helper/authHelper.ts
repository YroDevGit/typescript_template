
import Token from "@/models/token";

export const authLogin = async(userid:number,username:string, token:string, active:number, device:String, unit:String):Promise<any>=>{    
    const result = await Token.create({
        user: username,
        userid: userid,
        token: token,
        active: active,
        device: device,
        unit:unit
    });
    return result;
}

export const authLogout= async(user:number):Promise<any>=>{
    const update = await Token.update({active:0}, {where:{userid:user}});
    return update;
}

