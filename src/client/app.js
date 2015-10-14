import React from 'react';
import ReactDOM from 'react-dom';

const Headline = (props) => {
  return <h1>{props.title}</h1>;
};

const containerEl = document.getElementById('app');

ReactDOM.render(<Headline title="Hello World!"/>, containerEl);
