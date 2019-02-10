import React from 'react';

class Button extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <button onClick={this.props.onClick.bind(this)}>{this.props.title}</button>
            </div>
        )
    }
}

export default Button;