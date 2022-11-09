import ReactWeather, { useOpenWeather } from 'react-open-weather';
import {connect} from "react-redux";
import{login,logout} from '../store/actions/mock/mockLoginAction';
import{listLocations,selectLocation} from '../store/actions/searchLocationsActions';
import apikey from "./OpenWeatherAPIKey.json"

import{testvalidation} from '../store/actions/mock/formValidationActions';

const WeatherComponent = (props) => {
    const customStyles = {
        fontFamily:  'Helvetica, sans-serif',
        gradientStart:  '#0181C2',
        gradientMid:  '#04A7F9',
        gradientEnd:  '#4BC4F7',
        locationFontColor:  '#FFF',
        todayTempFontColor:  '#FFF',
        todayDateFontColor:  '#B5DEF4',
        todayRangeFontColor:  '#B5DEF4',
        todayDescFontColor:  '#B5DEF4',
        todayInfoFontColor:  '#B5DEF4',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#FFF',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#777',
        forecastDescColor:  '#777',
        forecastRangeColor:  '#777',
        forecastIconColor:  '#4BC4F7',
    };

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: apikey.key,
    lat: props.city.lat,
    lon: props.city.lon,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      theme={customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel={props.city.name}
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};


const mapStateToProps = (state)=>{
  return{
    user:state.auth.user,
    locationList:state.weatherReducer.locationList,
    validated:state.testvalid.testValidation,
    samePwd:state.testvalid.samePwd,
    city:state.weatherReducer.city,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    logout:()=>{dispatch(logout())},
    login:(user)=>{dispatch(login(user))},
    testvalidate:(val)=>{dispatch(testvalidation(val))},
    listLocations:(val)=>{dispatch(listLocations(val))},
    selectLocation:(val)=>{dispatch(selectLocation(val))}
  }
}  

export default connect(mapStateToProps,mapDispatchToProps)(WeatherComponent);