import React from 'react';
import renderer from 'react-test-renderer';
import BaseComponent from '../base-component';

test('Rendered BaseComponent', () => {
  const component = renderer.create(
    <div className="base-component">
      <h1>Hello World</h1>
    </div>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});