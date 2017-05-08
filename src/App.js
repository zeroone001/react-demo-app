import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/test.js';
// 这就是react的组件

function Formatted(props) {
  return <h2>It is {props.da.toLocaleTimeString()}</h2>;
}

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true,
      numbers: [1, 2, 3, 4, 5]
    };
    this.handleClick = this.handleClick.bind(this);
    // this.numberList = this.numberList.bind(this);
    this.focus = this.focus.bind(this);
  }

  handleClick() {
    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }));
    console.log('this is', this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  numberList() {
    const listItems = this.state.numbers.map((number, index) =>
      <li key={index}>{number}</li>
    );
    return <ul>{listItems}</ul>;
  }

  handleChange() {

  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    const temperature = this.state.temperature;
    const pro = {
      firstName: 'Ben',
      lastName: 'Hector'
    };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Formatted da={this.state.date} />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <div>
          {this.numberList()}
        </div>
        <div>
          <input value={temperature} onChange={this.handleChange}/>
          <Test celsius={parseFloat(temperature)} {...pro}>
          lalala
          </Test>
        </div>
        <Repeat numTimes={10}>
          {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
            <div>
            <input
              type="text"
              ref={(input) => { this.textInput = input; }} />
            <input
              type="button"
              value="Focus the text input"
              onClick={this.focus}
            />
          </div>
      </div>
    );
  }
}

export default App;