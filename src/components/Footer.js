import React, { Component } from 'react';

const footerText = "©Copyright 2050 by Monopoly Corp. All rights reserved.";

class Footer extends Component {
  render() {
    return (
      <div className = "footer">
        <p>{footerText}</p>
      </div>
    )
  };
}

export default Footer;
