import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {footerProp } = this.props;
   return (
     <div footerProp={footerProp}>
      <h2>Footer</h2>
      <p>{this.props.footerProp}</p>
     </div>
   );
 }
}

Footer.propTypes = {
  footerProp: PropTypes.string.isRequired,
}

export default Footer;
