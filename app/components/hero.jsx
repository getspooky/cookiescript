import React from 'react';
import PropTypes from 'prop-types';

export function Hero({title, subtitle, children}) {
  return (
    <div className="hero is-teal m-t-35">
      <div className="hero-body">
        <h1 className="title">{title}</h1>
        <strong className="subtitle">{subtitle}</strong>
        {children}
      </div>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};
