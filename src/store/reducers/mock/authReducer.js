
const initState = {
    user:{
        loggedIn:false,
    }
}

const authReducer = (state=initState,action) => {
    if(action.type==='LOGIN'){
        return{
            ...state,
            user:action.user
        }
    }
    
    else if(action.type==='LOGOUT')
    return{
        ...state,
        user:action.user
    }
    else return state;
}


export default authReducer;