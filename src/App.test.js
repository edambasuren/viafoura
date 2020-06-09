import React from 'react';
import { render, queryByAttribute, queryAllByAttribute } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import CommentList from './views/comment-list';
import {getData} from './api/comments';

const getById = queryByAttribute.bind(null, 'id');
const getAllByClass = queryAllByAttribute.bind(null, 'class');

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});

it('renders German automaker 1', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElements = getAllByText(/German automaker/i);

  expect(linkElements[0]).toBeInTheDocument();
});

it('renders German automaker 2', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElements = getAllByText(/German automaker/i);

  expect(linkElements[1]).toBeInTheDocument();
});

it('should have text content', () => {
  var data = getData();
  const dom = render(<CommentList data={data} />);
  const names = getAllByClass(dom.container, 'name');

  expect(names[0]).toHaveTextContent('Brad');
});

it('should have text content - custom', () => {
  const data = [
    {
      id: 1,
      photo: 'photo1.png',
      
      
      name: 'Petro',
      type: 'AUTHOR',
      timestamp: '2 minutes ago',
      body: 'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see Taycan free from any prototype bodywork.',
      reply_no: 21,
      up_votes: 123,
      down_votes: 0
    },
    {
      id: 2,
      photo: 'photo2.png',
      name: 'Brad',
      type: 'AUTHOR',
      timestamp: '2 minutes ago',
      body: 'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see taycan free from any prototype bodywork.',
      reply_no: 21,
      up_votes: 123,
      down_votes: 0
    }
  ];

  const dom = render(<CommentList data={data} />);
  const names = getAllByClass(dom.container, 'name');

  expect(names[0]).toHaveTextContent('Petro');
});
