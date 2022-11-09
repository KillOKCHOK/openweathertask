
const initState = {
    airportList:[],
    oneWay:true,
}


export const searchFlightReducer = (state=initState,action) => {
    if(action.type==='ListAirports'){
        return{
            ...state,
            airportList:action.airportList
        }
    }
    if(action.type==='changeTripType'){
        return{
            ...state,
            oneWay:action.oneWay
        }
    }
    else return state;
}

export default searchFlightReducer;