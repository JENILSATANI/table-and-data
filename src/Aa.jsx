
import React, { Component } from 'react';


 class Mounting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'jenil'
       }
       console.log("MOUNTING consructor props")
     }
     static getDerivedStateFormProps(props,state){
         console.log(" mounting getDerivedStateFormProps")
        return null
     }
     componentDidMount(){
       console.log('component did Mount')
     }
  render() {
      console.log('mounting')
    return <div>
        MOUNTING
    </div>;
  }
}

export default Mounting;
