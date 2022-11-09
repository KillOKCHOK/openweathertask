
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
    let url = 'http://api.openweathermap.org/geo/1.0/direct?q='+params.city+(params.state?(','+params.state+","):"")+"&limit=4&appid="+key;
    // console.log(url);
    return(dispatch, getState)=>{
        axios
        .get(url)
        .then(response => {
            // console.log(response.data);
            dispatch({type:"ListLocations",locationList:response.data});
            // console.log({'response.data':response.data, param:param});
        })
        .catch(err=>{
            // let url = 'http://api.openweathermap.org/geo/1.0/direct?q='+params.city+(params.state?(','+params.state+","):",")+"limit=5&appid="+key;
            // console.log(url);
            // console.log({err:err,param:param});
            console.log(err);
        });
        
    }
}

export const selectLocation=(param) => {
    console.log("location was selected");
    console.log(param);
    return {
        type:'selectLocation',
        locationList:[],
        city:param
    }
}