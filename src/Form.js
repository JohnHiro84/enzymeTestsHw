import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
          first: "",
          last: "",
          submittedValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e){
      // e.preventDefault();
      // console.log(e.target.value)
      this.setState({ [e.target.name] : e.target.value})
    }

    handleSubmit(e){
      e.preventDefault();
      const {first, last} = this.state;
      this.setState({ "submittedValue" : first + " " + last});

    }

    render() {

      const { submittedValue, first, last } = this.state;
        return (
            <form>
              <h2>Form </h2>
              <label>First Name:</label>
              <input type="text" name='first' id="first" value={this.state.first} onChange={this.handleChange} />
              <label>Last Name:</label>
              <input type="text" name='last' id="last" value={this.state.last} onChange={this.handleChange} />

              <button name="submit-value" id="submit" onClick={this.handleSubmit}>Submit</button>
              <span>{ (submittedValue.length > 1) ? "Thank you for your submission." : " "}</span>
            </form>
        );
    }

}

export default Form;
