
import React, { Component } from 'react';
// import './App.css';
// import G from './Component/G';
// import Hooks1 from './Component/Hooks1';
// import Comp1 from './Component/Comp1';
// import Copy from './Component/Copy';
// import Reducer from './Component/Reducer';
// import Memo from './Component/Memo';
// import Home from './Component/Home';

import Form from './Componet/Form';
//  export const UserContext =React.createContext()
// import './Form.css';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';




class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <UserContext.Provider value={'genius'}>
      <Comp1/>
      </UserContext.Provider>
      <Copy/> */}
   
    <Form/>

    </div>

  )
}
}

export default App;