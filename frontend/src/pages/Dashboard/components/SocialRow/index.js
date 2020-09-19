import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';

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
        <div Style="height: 100%; width: 40%;display: flex;flex-direction: column;">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portifoil-bcd7d.appspot.com/o/profile.png?alt=media&token=10ead545-56fd-43f2-8c2b-69121539af40"
            alt="profile picture"
            Style="border-radius: 50%;
            width: 16em;
            align-self: center;
            margin-top: 4em;"
          />
          <div
            Style="display: flex;
    height: 2em;
    align-items: center;
    justify-content: center;
    margin-top: 4em;"
          >
            <img
              Style="height: 100%;margin: 0 1.5em;"
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              Style="height: 100%;margin: 0 1.5em;"
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              Style="height: 100%;margin: 0 1.5em;"
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              Style="height: 100%;margin: 0 1.5em;"
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              Style="height: 100%;margin: 0 1.5em;"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
        <div Style="height: 100%; width: 60%; display: flex;flex-direction: column">
          <div Style="height: 100%;">
            <p
              Style="color: #fffff5;
    font-size: 3rem;
    margin-top: 0.8em;
    margin-bottom: 0.3em;"
            >
              Francisco Olvera
            </p>
            <p
              Style="color: #848589;
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 1.7em;"
            >
              FULL STACK DEVELOPER & UI/UX DESIGNER
            </p>
            <div>
              <Button
                size="small"
                href="https://firebasestorage.googleapis.com/v0/b/portifoil-bcd7d.appspot.com/o/company-logos%2FCV-2020.pdf?alt=media&token=67f9f25c-afec-4fba-b4e7-fa51381f4535"
                target="_blank"
                style={{
                  background: '#2fc851',
                  color: 'white',
                  fontSize: '1em',
                  padding: '0.5em 2em',
                  marginRight: '1em',
                }}
              >
                DOWNLOAD CV
              </Button>
              <Button
                size="small"
                href="mailto:olverajunior2014@gmail.com"
                target="_top"
                rel="noopener noreferrer"
                style={{
                  background: '#2778fb',
                  color: 'white',
                  fontSize: '1em',
                  padding: '0.5em 2em',
                }}
              >
                CONTACT
              </Button>
            </div>
          </div>
          <div Style="background-color: blue;height: 100%;"></div>
        </div>
      </div>
    </div>
  );
}

export default SocialRow;
