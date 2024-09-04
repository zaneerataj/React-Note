import React, { Component } from 'react'

class Conditional extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        empoyee: false
      }
    }

  render() {
    if (this.state.empoyee){
        return <h3>Go to work place</h3>
    }
       else{
        return <h3>Sit in waiting Hall</h3>
       }     
    // return (
    //   <div>
    //     <div></div>

    //   </div>
      
    // )
  }
}

export default Conditional