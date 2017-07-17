import React, {Component} from 'react';
import './App.css';
import Dropdown from './Dropdown';
import logo from './logo.svg';

class App extends Component {

  constructor() {
    super()
    this.state = {
      options: [
        {
          description: 'This is option A',
          code: 'a'
        }, {
          description: 'This is option B',
          code: 'b'
        }, {
          description: 'This is option C',
          code: 'c'
        }, {
          description: 'This is option D',
          code: 'd'
        }
      ]
    }
  }

  dropDownOnChange = (change) => {
    alert('onChangeForSelect:\noldValue: ' + change.oldValue + '\nnewValue: ' + change.newValue);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Simple Dropdown</h2>
        </div>
        <br/>
        <Dropdown
          options={this.state.options}
          value=''
          labelField='description'
          valueField='code'
          onChange={this.dropDownOnChange}/>
      </div>
    );
  }
}

export default App;
