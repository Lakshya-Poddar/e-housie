import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Visible from './components/Visible';
import logo from './logo.png'

function App() {
  return (
    
    <div className="container-fluid mt-1  bg-secondary text-light pb-3 pt-3" style={{border:'3px solid black'}}>
    <h1 className="text-center mx-auto" style={{background:'#000'}} ><img className="img-fluid" src={logo} alt="logo" /></h1>
    <Visible />
    <p className="text-center pt-2 mb-0 pb-0"><i>Copyright@2020 <b>LMP</b> </i></p>
    </div>
  );


}

export default App;

