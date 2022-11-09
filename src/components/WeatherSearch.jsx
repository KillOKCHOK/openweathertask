import React from 'react';
import {Form,InputGroup,Button, Row, Col} from 'react-bootstrap';
import{testvalidation} from '../store/actions/mock/formValidationActions';
import {connect} from "react-redux";
import{login,logout} from '../store/actions/mock/mockLoginAction';
import{listLocations,selectLocation} from '../store/actions/searchLocationsActions';
import WeatherComponent from './WeatherComponent'
// import ReactWeather, { useOpenWeather } from 'react-open-weather';

class WeatherSearch extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        let params = {};
        params.name = event.currentTarget.validationCustom03.value;
        params.state = event.currentTarget.validationCustom04.value;
        if(this.props.city.name===params.name&this.props.city.state===params.state){
            this.props.selectLocation(this.props.city.name==params.name?this.props.city:params);
        }
        else{
            this.props.listLocations(params);
        }
}
handleChange(event) {
        event.preventDefault();
        event.stopPropagation();
        let params = {};
        params.city = event.currentTarget.validationCustom03.value;
        params.state = event.currentTarget.validationCustom04.value;
        this.props.listLocations(params);
}



render() {
let cityOptions = this.props.locationList.length>0?this.props.locationList.map((item, i) => {
    return (
      <option className="list-group-item list-group-item-action" key={i} value={item.name} onClick={ e =>{
            // console.log("item");
            console.log(item);
            document.getElementById("validationCustom03").value = item.name;
            document.getElementById("validationCustom04").value = item.state;
            this.props.selectLocation(item);
        }
      }>
        {item.name+" "+item.state}
      </option>
    );
  }):"";
    return (
    <div>
        <div className="pageBaseComponent mainPageFirstLvl  w-100 mx-1 px-5 ">
            <div className='logo'></div>
        </div>
        <div className="mainPageSecondLvl  w-100 mx-1 px-5 ">
            <br/>
        <Form onSubmit={e => this.handleSubmit(e)} 
        onChange={e => this.handleChange(e)}
        >
            <Form.Label>Please enter your location</Form.Label>
            <Row className="mb-3">
        <Form.Group as={Col} md="7" controlId="validationCustom03" className="form-select-lg mb-3" >
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required  aria-label=".form-select-lg example" defaultValue={this.props.city.name} />
            <div id="MyOptions" className='list-group'>
            {cityOptions} 
            </div>
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" defaultValue={this.props.city.state}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
            <Form.Group as={Col} md="2" controlId="SearchId" className="mt-1 mx-0 px-0 ">
                <br/>
              <Button style={{width:"100%"}} type="submit">Search</Button>
            </Form.Group>
            </Row>
        </Form>
         <br/>  
        </div>
        <div className="mainPageThirdLvl  w-100 mx-1 px-5 ">
                
        </div>
        
        <div className="mainPageThirdLvl  w-100 mx-1 px-5 ">
                  <div className="textCenter">
                    <h1>{this.props.city?this.props.city.name+" "+this.props.city.state:"No Data"}</h1>
                    <WeatherComponent />
                </div>
            <br/>
        </div>
        
        <div className="mainPageFourthLvl  w-100 mx-1 px-5 " style={{background: "lightgray"}}>
            <br/>
            <h4>Data from <a href='https://openweathermap.org/' target="blank">openweathermap.org</a></h4>
            <br/>
        </div>
    </div>
      );
    }
  }

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

export default connect(mapStateToProps,mapDispatchToProps)(WeatherSearch);