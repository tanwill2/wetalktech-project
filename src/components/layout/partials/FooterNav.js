import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import AboutPopup from '../AboutPopup';

const FooterNav = ({
  className,
  ...props
}) => {
  const [showAboutPopup, setShowAboutPopup] = useState(false);

  const classes = classNames(
    'footer-nav',
    className
  );

  const handleShowAboutPopup = () => {
    setShowAboutPopup(true);
  };

  const handleCloseAboutPopup = () => {
    setShowAboutPopup(false);
  };

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="mailto:wetalktechtanise@gmail.com">Contact</a>
        </li>
        <li>
          <Button className="about_link about_link_footer" variant="link" onClick={handleShowAboutPopup}>About</Button>
        </li>
      </ul>
      <AboutPopup show={showAboutPopup} handleClose={handleCloseAboutPopup} />
    </nav>
  );
}

export default FooterNav;