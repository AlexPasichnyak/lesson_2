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
      nick: 'Sancho Paska',
      btnScroll: {
        btnUp: false,
        btnDown: false
      }
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = () => {
    const {
      btnScroll: { btnUp, btnDown }
    } = this.state;
    const coordY = window.pageYOffset;
    const heightWindow = document.body.scrollHeight - window.innerHeight;
    const btnToTop = coordY >= 250;
    const btnToBottom = coordY <= heightWindow - 250;
    if (btnToTop !== btnUp || btnToBottom !== btnDown) {
      this.setState({
        btnScroll: {
          btnUp: btnToTop,
          btnDown: btnToBottom
        }
      });
    }
  };

  scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  scrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight - window.innerHeight,
      behavior: 'smooth'
    });
  };

  render() {
    const {
      address, author, nick, btnScroll 
    } = this.state;

    return (
      <FooterView
        addresspost={address.postcode}
        region={address.region}
        tel={address.tel}
        country={address.country}
        email={address.email}
        nick={nick}
        author={author}
        btnUp={btnScroll.btnUp}
        btnDown={btnScroll.btnDown}
        scrollUp={this.scrollUp}
        scrollDown={this.scrollDown}
      />
    );
  }
}

export default Footer;
