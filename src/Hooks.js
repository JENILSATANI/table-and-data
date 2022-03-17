import React, { Component ,useEffect} from 'react'
//  class Hooks extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0
//         }
//     }
//     componentDidMount() {
//         document.title = `yeye ${this.state.count}ss`
//     }
//     componentDidUpdate() {
//         document.title = `yeye ${this.state.count}ss`

//     }
//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>

//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>llllll</button>

//             </div>
//         )
//     }
// }

// export default Hooks
class Hooks extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    componentDidMount() {
      document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
      document.title = `You clicked ${this.state.count} times`;
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }
  export default Hooks