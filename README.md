## React Simple Dropdown

Simple React.js Component to render a dropdown.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## How to use
Clone the repo to your system and run this command to install the dependencies.

```
cd react-simple-dropdown
npm install
npm start
```

Navigate to port on which the app is running. Its usually port 3000

```
http://localhost:3000/
```

## Screenshots
![alt text](https://github.com/deepakkadarivel/react-simple-dropdown/blob/master/screen_one.jpg "Screen shot one")

![alt text](https://github.com/deepakkadarivel/react-simple-dropdown/blob/master/screen_two.jpg "Screen shot one")

## Dropdown Component

>Note: `this.props.options` is an array passed to Dropdown components as props.<br>
>

```
import React, {Component} from 'react';

class Dropdown extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectValue: ''
        };
    }

    handleChange(event) {
        this.setState({selectValue: event.target.value});
    }

    componentDidMount() {
        this.setState({
            selectValue: this.props.options[0].description
        });
    }

    render() {
        var message = 'You selected ' + this.state.selectValue;
        var options = this.props.options.map((option) => {
                return (
                    <option
                        key={option.code}
                        value={option.description}>
                        {option.description}
                    </option>
                )
            })
        return (
            <div>
                <select id={this.props.id}
                    className='form-control' 
                    value={this.state.selected} 
                    onChange={this.handleChange}>
                {options}
            </select>
                <p>{message}</p>
            </div>
        );
    }
}
export default Dropdown;
```

## Dropdown Component Usage

```
<Dropdown
    options={this.state.options}/>
```

## Change Dropdown Component's `handleChange` method to send control to Parent

```
handleChange = (e) => {
    if (this.props.onChange) {
        var change = {
          oldValue: this.state.selectValue,
          newValue: e.target.value
        }
        this.props.onChange(change);
    }
    this.setState({selectValue: e.target.value});
}
```

## Dropdown Component Usage from parent

```
<Dropdown
    options={this.state.options}
    value=''
    labelField='description'
    valueField='code'
    onChange={this.dropDownOnChange}/>
```
