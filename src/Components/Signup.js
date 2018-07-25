import React, { Component } from 'react';
import '../App.css';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {form: {name: '', phone: '', weight: '', height: ''}};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(evt) {
    //TODO make api call
    fetch("/users/signup", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({user: this.state.form}), // body data type must match "Content-Type" header
  })
  .then(response => console.log(response.json())) // parses response to JSON
  .catch(error => console.error(`Fetch Error =\n`, error));
  }

  handleChange (evt) {
    this.state.form[evt.target.name] = evt.target.value;
    this.setState({form: this.state.form});
  }
  render() {
    return (
    <div>
        <h1>Signup</h1>
        <div>
          <label htmlFor="name">Enter your name</label> <br/>
          <input type="Text" onChange={this.handleChange} name = "name" id="name" value={this.state.name} className="label-mrgn mrgn-btm-20px" placeholder="Enter your name"/>
        </div>          
        <div>
          <label htmlFor="phone">Enter your phone</label> <br/>
          <input type="Text" onChange={this.handleChange} name = "phone" id="phone" value={this.state.phone} className="label-mrgn mrgn-btm-20px" placeholder="Enter your phone"/>
        </div>                  
        <div>
          <label htmlFor="weight">Enter your weight</label> <br/>
          <input type="Text" onChange={this.handleChange} name = "weight" id="weight" value={this.state.weight} className="label-mrgn mrgn-btm-20px" placeholder="Enter your weight"/>
        </div>          
        <div>
          <label htmlFor="height">Enter your height</label> <br/>
          <input type="Text" onChange={this.handleChange} name = "height" id="height" value={this.state.height} className="label-mrgn mrgn-btm-20px" placeholder="Enter your height (cms)"/>        
        </div>
        <input type="button" onClick={this.handleSubmit} value="Submit"/>
    </div>
    );
  }

}

export default Signup;
