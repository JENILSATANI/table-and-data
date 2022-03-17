import React, {    } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Copy.css'
import './Pp.css'
// import Pp from "./Pp";
import Copy from "./Copy"; 
import Hooks from "./Hooks";
// import Mounting from "./Mounting";
// import Switch from "react-bootstrap-v5/lib/esm/Switch";
// import { Route,Switch ,Redirect} from "react-router-dom";
// import Table from "./Table";

const App=()=> {
  // const onSubmit = () =>{
  //      this.setstate({
  //        submit:e.target.submit
  //      })
  // }

  return (
    <div className="mt-4 ">
      <h1>HELoo</h1>
      {/* <Mounting/> */}
      <Copy/> 
      <Hooks/>
      {/* <Cc/> */}
       {/* <Pp/> */}
      {/* <Fd/>  */}
      
       {/* <Switch> */}
         {/* <Route exact path='/Pp' component={Pp}/>
         <Route exact path='/Table' component={Table}/> */}
         {/* <Redirect to ='/Table'/> */}
       {/* </Switch> */}
   
       
    </div>
  );
}
    
export default App;
