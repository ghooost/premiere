import React from 'react';
import { act, create } from 'react-test-renderer';
import ActiveLink from '../ActiveLink';

test('Should generate A with right href', () => {
  let component;
  act(() => {
    component = create(
      <ActiveLink href="/about">Facebook</ActiveLink>,
    );
  });
  const tree = component.toJSON();
  expect(tree.props.href).toEqual('/about');
  expect(tree.type).toEqual('a');
  expect(tree.children).toEqual(['Facebook']);
});
