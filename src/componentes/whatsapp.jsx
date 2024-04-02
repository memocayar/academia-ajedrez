import React from 'react';
import whatsAppIcon from ".././img/whatsapp-icon.png";

export default function WhatsAppButton() {
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '1000', 
  };

  const imageStyle = {
    width: '70px',
    height: '70px',
    //borderRadius: '50%',
  };

  return (
    <div style={buttonStyle}>
      <a href='https://wa.link/cuanak' target="_blank">
        <img src={whatsAppIcon} alt="whatsapp"   style={imageStyle} />
      </a>
    </div>
  );
}
