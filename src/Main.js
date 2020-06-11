import React from 'react';
import Movies from './Movies';
import Form from './Form';
import Footer from './Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    // your code here
    this.state = {

    };

  }


  render() {
   return (
     <div>
        <h1>Enzyme Tests Homework</h1>
        <ul>
          <li>Browsing Movies</li>
          <li>Form Input</li>
          <li>3rd</li>
          <li>4th</li>
        </ul>

        <Movies />

        <Form />

        <Footer footerProp={"A little app to show basic Jest and Enzyme Tests by AY"} />



     </div>
   );
 }
}

export default Main;
