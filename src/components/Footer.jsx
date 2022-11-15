import React from 'react';
import { Link } from 'react-router-dom';
import FooterStyle from '../styles/FooterStyle';

import drinkIcon from '../images/out/drinkIcon.png';
import mealIcon from '../images/out/mealIcon.png';

function Footer() {
  return (
    <FooterStyle className="footer" data-testid="footer">
      <Link to="/drinks">
        <img src={ drinkIcon } alt="drinkIcon" data-testid="drinks-bottom-btn" />
      </Link>
      <Link to="/meals">
        <img src={ mealIcon } alt="mealIcon" data-testid="meals-bottom-btn" />
      </Link>
    </FooterStyle>
  );
}

export default Footer;
