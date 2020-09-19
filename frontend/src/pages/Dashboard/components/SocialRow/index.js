import React, { useEffect } from 'react';

import './styles.css';

function SocialRow() {
  useEffect(() => {
    function initParalax() {
      let card = document.querySelector('.card');
      let cardLocation = card.getBoundingClientRect();

      card.onmouseout = () => {
        card.style.transform = 'rotateY(0) rotateX(0) scale(1)';
      };
      card.onmousemove = e => {
        let x = ((e.pageX - cardLocation.left) / cardLocation.width) * 2 - 1;
        let y = ((e.pageY - cardLocation.top) / cardLocation.height) * 2 - 1;

        card.style.transform =
          'rotateY(' + x * 15 + 'deg) rotateX(' + -y * 15 + 'deg) scale(1.05)';
      };
    }

    initParalax();
  });

  return (
    <div className="wrapper">
      <div className="bg card">
        <div className="bginner"></div>
      </div>
    </div>
  );
}

export default SocialRow;
