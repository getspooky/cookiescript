## Testing 

Testing is a group of techniques to determine the correctness of the application under the predefined script but, testing cannot find all the defect of application. The main intent of testing is to detect failures of the application so that failures can be discovered and corrected. It does not demonstrate that a product functions properly under all conditions but only that it is not working in some specific conditions.

By default Mernless includes `Unit` , `Integration` and `e2e` or `functional` testing.

## Jest 

Mernless uses free library `Jest` for running, and structuring tests.
Jest is distributed as an NPM package and one of the most popular test runner these days and the default choice for Create React App. 

## Creating & Running Tests

To create a new test case, you should respect this format : `\\.(test|spec)\\.js$` 

## Example 

`app/App.test.js`

```JS
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toBe(1);
});

```

`server/App.test.js`

```JS
import request from 'supertest';
import app from './App';

describe('GET /api', () => {
  it('should return 200', done => {
    request(app)
      .get('/api')
      .expect(200, done);
  });
});

```

`e2e/App.test.js`

```JS
import puppeteer from 'puppeteer';

describe('e2e test', () => {
    it('/ (Home Page)', async () => {
      const browser = await puppeteer.launch({
          headless:false
      });
      const page = await browser.newPage();
      await page.goto('http://localhost:8080/');
    });
});

```