/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import '@testing-library/jest-dom'
import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import Alert from 'views/components/Alert.component';

var props = {
  className: 'orange',
  message: 'Be Warned',
  details: 'Something not ideal might be happening.'
};

var wrapper = null;

beforeEach(() => {
  wrapper = <Alert className={props.className} message={props.message} details={props.details} />
});

test('should render component without crash', () => {
  const container = document.createElement('div');
  ReactDom.render(wrapper, container);
  ReactDom.unmountComponentAtNode(container);
});

test('should render props data', () => {
  const { getByTestId } = render(wrapper);
  expect(getByTestId(/testing-root/i)).toHaveClass("orange border-l-4 p-4");
  expect(getByTestId(/testing-header/i)).toHaveTextContent("Be Warned");
  expect(getByTestId(/testing-details/i)).toHaveTextContent("Something not ideal might be happening.");
});

test('should renders correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
