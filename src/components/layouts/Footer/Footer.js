import React, { Component } from 'react';
import FooterView from './FooterView';
import '../../../scss/layouts/Footer.scss';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {
        postcode: 25000,
        region: 'Kirovograd region',
        country: 'Ukraine',
        tel: '+380993700149',
        email: 'aleksa.intel@gmail.com'
      },
      author: 'Oleksandr Pasichnyak',
      nick: 'Sancho Paska'
    };
  }

  render() {
    const { address } = this.state;
    const { author } = this.state;
    const { nick } = this.state;
    
    return (
      <FooterView
        addresspost={address.postcode}
        region={address.region} 
        tel={address.tel} 
        country={address.country} 
        email={address.email} 
        nick={nick} 
        author={author} 
      />
    );
  }
}

export default Footer;
