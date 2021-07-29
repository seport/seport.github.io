import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

function component() {
  const element = document.createElement('div');
  element.id = "app";

  return element;
}

document.body.appendChild(component());
document.body.insertAdjacentHTML("beforeend", '<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script><script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>');

const domContainer = document.querySelector('#app');
ReactDOM.render(e(LikeButton), domContainer);