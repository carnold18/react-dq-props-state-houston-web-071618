import React, { Component } from 'react'
import Master from './assets/master-hog.png'
import BabyHog from './BabyHog'
import offspring from './db.js'

// Naming conventions are VITAL - camelCasing (functions/arrays) versus PascalCasing (components)

class MasterHog extends Component {

  constructor() {
    super()
    this.state = {
      eyeColor: "",
    }
  }
  // THINK ABOUT MODULE 2 RELATIONSHIPS (one to many and table relationships)

  // When do we use a state?
  // You use a state if you aren’t inheriting properties from the parent. Is the attribute passed down 
  // from the parent component? If not, initiate it with a state (can set the state to an empty string if you want).

  // When do we use a prop?
  // You use props if properties are “propogating” down from the the parent. 

  listOffspring = () => {
    return offspring.map((offspring) => {
      return <BabyHog eyeColor={this.state.eyeColor}  {...offspring}/>
    })
  }

  // 1. Create a function that you can call in the render below.
  // 2. Pass the imported array.

  changeEyeColor = (e) => {
    this.setState({
      eyeColor: e.target.value
    })
  }

  render() {
    return (
      <div>

        <input type="radio" name="eyeColor" value="blue" onChange={this.changeEyeColor} />
        Blue<br></br>
        <input type="radio" name="eyeColor" value="sun" onChange={this.changeEyeColor} />
        Sun<br></br>
        <input type="radio" name="eyeColor" value="glowing" onChange={this.changeEyeColor} />
        Glowing<br></br>
      
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        
        <ul className="hoglist">
          {this.listOffspring()}
        </ul>
      </div>
      // Remember on Line 51 to return the function, using the (). Without this, we are only passing the function
      // istelf into the ul.
    )
  }
}

export default MasterHog;