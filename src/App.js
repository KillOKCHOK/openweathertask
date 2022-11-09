import logo from './logo.svg';
import './App.css';
import '../src/style/style.css';
import WeatherSearch from './components/WeatherSearch'
import {connect} from "react-redux";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
      <WeatherSearch/>
      </header>
    </div>
  );
}
const mapStateToProps = (state)=>{
  return{
    user:state.auth.user,
  }
};

const mapDispatchToProps = (dispatch)=>{
  return{
  }
}  ;


export default connect(mapStateToProps,mapDispatchToProps)(App);