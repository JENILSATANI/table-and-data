
  
import React, { Component } from 'react'
// import LifecycleB from './LifecycleB'

class Mounting extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'jenil'
		}
		console.log('LifecycleA constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleA getDerivedStateFromProps')
		return null
	}

	componentDidMount() {
		console.log('LifecycleA componentDidMount')
	}

	// shouldComponentUpdate() {
	// 	console.log('LifecycleA shouldComponentUpdate')
	// 	return true
	// }

	// getSnapshotBeforeUpdate(prevProps, prevState) {
	// 	console.log('LifecycleA getSnapshotBeforeUpdate')
    // return null
	// }

	// componentDidUpdate() {
	// 	console.log('LifecycleA componentDidUpdate')
	// }

	// changeState = () => {
	// 	this.setState({
	// 		name: 'Codevolution'
	// 	})
	// }?

	render() {
		console.log('LifecycleA render')
		return (
			<div>
				{/* <button onClick={this.changeState}>Change state</button> */}
				LifecycleA
                {/* <LifecycleB /> */}
			</div>
		)
	}
}

export default Mounting



// import React, { Component } from 'react';


//  class Mounting extends Component {
//      constructor(props) {
//        super(props)
     
//        this.state = {
//           name:'jenil'
//        }
//        console.log("MOUNTING consructor props")
//      }
//      static getDerivedStateFormProps(props,state){
//          console.log(" mounting getDerivedStateFormProps")
//         return null
//      }
//      componentDidMount(){
//        console.log('component did Mount')
//      }
//   render() {
//       console.log('mounting')
//     return <div>
//         MOUNTING
//     </div>;
//   }
// }

// export default Mounting;
