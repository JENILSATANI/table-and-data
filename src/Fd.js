import React, { Component } from 'react';

 class Fd extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          count:0
       }
     }
     handleincremnet = () =>{
         this.setState({
             count:this.state.count +1
         })
     }          
     hadledecrement = () =>{
        this.setState({
            count:this.state.count -1
        })
    }
    
     
  render() {
    return (
        <div style={{ textAlign:'center'  }}>
            <h1>{this.state.count}</h1>
            <button style={{ background:'gold' }} onClick={this.handleincremnet} >+</button>
            <button style={{ background:'blue' }} onClick={this.hadledecrement}>-</button>
        </div>
    )
  }
}

export default Fd;
