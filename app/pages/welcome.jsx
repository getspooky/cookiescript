import React from 'react';
import {Link} from 'react-router-dom';

export default function() {
  return (
    <div className="content">
      <img src={require('../assets/cover.jpg')} alt="welcome" />
      <div className="links">
        <Link to="https://getspooky.github.io/Mernless/">Docs</Link>
        <Link to="https://github.com/getspooky/Mernless/issues">Issues</Link>
        <Link to="https://github.com/getspooky/Mernless/pulls">Pull Requests</Link>
        <Link to="https://beerpay.io/getspooky/Mernless">Sponsor</Link>        
        <Link to="https://github.com/getspooky/Mernless">GitHub</Link>
      </div>
    </div>
  );
}
