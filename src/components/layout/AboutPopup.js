import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const AboutPopup = ({ show, handleClose }) => {
  return (
    <Modal className="about_modal" show={show} onHide={handleClose} centered>
      <Modal.Body className="modal_body">
        <img src="tanise.png" alt="Tanise Williams"></img>
        <br/>
        <p>Hi, I'm Tanise!  <span role="img" aria-label="smile emoji"> 😊 </span></p>

        <p>I wanted to build something that would help others. That led to We Talk Tech, a React application that simplifies coding concepts for those who are new to programming or have limited technical backgrounds. On We Talk Tech, you can find explanations for various coding topics, written in an easy-to-understand way, making coding more accessible and less intimidating for everyone.</p>

        <p>I am now seeking remote work opportunities and I am open to join a company that supports my passion for technology. If you're looking for a motivated and skilled developer who can bring her skills and passion to your company, don't hesitate to reach out!</p>

        <p>Please email me at tanise.williams@icloud.com, wetalktechtanise@gmail.com, or linkedin.com/in/tanisewilliams. Thank you all! <span role="img" aria-label="smile emoji">😊</span></p>
      </Modal.Body>
      <Modal.Footer>
        <div onClick={handleClose}>
          X
        </div>
      </Modal.Footer>
    </Modal>
  );
};

AboutPopup.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func
};

export default AboutPopup;
