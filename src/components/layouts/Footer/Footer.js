import React, { useState, useEffect } from 'react';
import FooterView from './FooterView';
import '../../../scss/layouts/Footer.scss';

const Footer = () => {
  const [address] = useState([{
    postcode: 25000,
    region: 'Kirovograd region',
    country: 'Ukraine',
    tel: '+380993700149',
    email: 'aleksa.intel@gmail.com'
  }]);
  const [nick] = useState(' Sancho Paska');
  const [author] = useState('Oleksandr Pasichnyak');
  const [btnScroll, setScrollHandler] = useState([{
    btnUp: false,
    btnDown: false    
  }]);

  const scrollHandler = () => {
    const { btnUp, btnDown } = btnScroll;
    const coordY = window.pageYOffset;
    const heightWindow = document.body.scrollHeight - window.innerHeight;
    const btnToTop = coordY >= 250;
    const btnToBottom = coordY <= heightWindow - 250;
    if (btnToTop !== btnUp || btnToBottom !== btnDown) {
      setScrollHandler({ 
        btnUp: btnToTop,
        btnDown: btnToBottom
      });
    }
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight - window.innerHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  const {
    postcode, region, country, tel, email 
  } = address;
  const { btnUp, btnDown } = btnScroll;

  return (
    <FooterView
      addresspost={postcode}
      region={region}
      tel={tel}
      country={country}
      email={email}
      nick={nick}
      author={author}
      btnUp={btnUp}
      btnDown={btnDown}
      scrollUp={scrollUp}
      scrollDown={scrollDown}
    />
  );
};

export default Footer;
