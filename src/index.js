import App from './App';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return <App />;
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Likes
      </button>
    );
  }
}

let domContainer = document.querySelector('#app');
ReactDOM.render(<LikeButton />, domContainer);