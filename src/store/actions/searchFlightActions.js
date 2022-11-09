
import axios from 'axios';
import apikey from  "../../components/OpenWeatherAPIKey.json"
// export const listAirports=(param)=>{
//     return(dispatch, getState)=>{
//         axios
//         .get('https://fqndkbn9sk.execute-api.us-east-1.amazonaws.com/dev/airports?name='+param)//+param
//         .then(response => {
//             dispatch({type:"ListAirports",airportList:response.data});
//             // console.log({'response.data':response.data, param:param});
//         })
//         .catch(err=>{
//             // console.log({err:err,param:param});
//         });
        
//     }
// }
export const listLocations=(params)=>{
    let key = apikey.key;
    return(dispatch, getState)=>{
        axios
        .get('http://api.openweathermap.org/geo/1.0/direct?q='+params.city+params.state?`,`+params.state+",":","&"limit=5&appid="+key)
        .then(response => {
            dispatch({type:"ListLocations",LocationList:response.data});
            // console.log({'response.data':response.data, param:param});
            console.log(response.data);
        })
        .catch(err=>{
            // console.log({err:err,param:param});
            console.log(err);
        });
        
    }
}

export const changeTripType = (param) => {
    return {type:'changeTripType',
            oneWay:param}
}

