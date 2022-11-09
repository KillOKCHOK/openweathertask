exports.logout=()=>{
   return { 
       type:'LOGOUT',
       user:{ loggedIn:false} }
}


exports.login= (user)=>{
    return {type:'LOGIN',
            user:user}
}