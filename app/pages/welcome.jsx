import React from 'react';
import {Link} from 'react-router-dom';

export default function() {
  return (
    <div className="content">
      <img src={require('../assets/cover.jpg')} alt="welcome" />
      <div className="links">
        <Link to="/">Docs</Link>
        <Link to="/">Guides</Link>
        <Link to="/">News</Link>
        <Link to="/">Blog</Link>
        <Link to="/">GitHub</Link>
      </div>
    </div>
  );
}
