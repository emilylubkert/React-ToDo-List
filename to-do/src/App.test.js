import React from 'react';
import * as ReactDOM from 'react-dom';
// import { getQueriesForElement } from '@testing-library/dom'
import {render, fireEvent, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import { api } from './api';

// function render(component){
//   const root = document.createElement('div');
//   ReactDOM.render(component, root);
//   return getQueriesForElement(root)
// }
const mockCreateItem = (api.createItem = jest.fn());

test ('add items to list', async () => {
  const todoText = 'Learn spanish';
  mockCreateItem.mockResolvedValueOnce(todoText);
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText('Add ToDo');
  fireEvent.change(input, {target:{value:'wash car'}});
  fireEvent.click(getByText('Add'));

  await waitFor(() => getByText('wash car'));

  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(
    expect.stringContaining('wash car')
  );
})



// test('ToDo', () => {

//   //create instance of capabilities
//   // const {getByText, getByLabelText} = getQueriesForElement(root);
//   const {getByText, getByLabelText} = render(<App />);

//   //after render component in virtual headless environment
//   //use DOM APIs (query selector) to make assertions
//   // expect(root.querySelector('h1').textContent).toBe("ToDo");

//   // expect(getByText('ToDo')).not.toBeNull();
//   getByText('ToDo');


// });
// use fireEvent
// test('add items to list', () => {

//   const {getByText, getByLabelText} = render(<App />);

//   const input = getByLabelText('Add ToDo');
//   fireEvent.change(input, {target: {value: 'wash car'}});
//   fireEvent.click(getByText('Add'));

//   //confirm data
//   getByText('wash car');
// });

// use userEvent - expresses intent better
// test('user-event allows users to add...', () => {
//   const {getByText, getByLabelText} = render(<App />);

//   const input = getByLabelText('Add ToDo');
//   const button = getByText("Add");

//   userEvent.type(input, 'Learn Spanish');
//   userEvent.click(button);

//   getByText('Learn Spanish');

// })

//mock component here - provide alternative definition for MyComponet - use this instead of what is brought in from the file
// jest.mock('./MyComponent', () => () => (<div>Hello, World!</div>));

// test ('mocking test', () => {
//   const {container} = render(<App />);
//   expect (container.textContent).toMatch('Hello, World!');
// })