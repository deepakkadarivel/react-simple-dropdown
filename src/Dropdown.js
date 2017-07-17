import React, {Component} from 'react';

class Dropdown extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectValue: ''
        };
    }

    // Uncomment to have control in this Component.
    handleChange(event) {
        this.setState({selectValue: event.target.value});
    }

    // Uncomment to send control in this Parent Component.
    // handleChange = (e) => {
    //     if (this.props.onChange) {
    //         var change = {
    //           oldValue: this.state.selectValue,
    //           newValue: e.target.value
    //         }
    //         this.props.onChange(change);
    //     }
    //     this.setState({selectValue: e.target.value});
    // }

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