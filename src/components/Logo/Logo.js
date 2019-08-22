import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className='' style={{display: 'flex', justifyContent: 'center'}}>
      <Tilt className="Tilt br2" options={{ max : 55 }} style={{width: 150 }} >
        <div className="Tilt-inner pa3 pt0">
          <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
