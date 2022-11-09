
const initState = {
    locationList:[],
    city:{
        country: "US",
        lat: 39.174625,
        lon: -84.2958988,
        name: "Milford",
        state: "Ohio",
    },
}


export const weatherReducer = (state=initState,action) => {
    if(action.type==='ListLocations'){
        console.log(action.locationList);
        return{
            ...state,
            locationList:action.locationList,
            city:action.locationList[0]?action.locationList[0]:state.city
        }
    }
    if(action.type==='selectLocation'){
        return{
            ...state,
            locationList:action.locationList,
            city:action.city
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

export default weatherReducer;