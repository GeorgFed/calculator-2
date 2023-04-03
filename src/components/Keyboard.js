import React, { Component } from 'react';

class Keyboard extends Component {
    render() {
        return (
            <React.Fragment>

                <tr>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="1" /> </td>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="2" /> </td>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="3" /> </td>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="/" /> </td>
                </tr>
                <tr>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="4" /> </td>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="5" /> </td>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="6" /> </td>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="-" /> </td>
                </tr>
                <tr>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="7" /> </td>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="8" /> </td>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="9" /> </td>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="+" /> </td>
                </tr>
                <tr>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="." /> </td>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="0" /> </td>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="=" /> </td>
                    <td> <input type="button" onClick={e => this.props.onClick(e.target.value)} value="*" /> </td>
                </tr>
            </React.Fragment>
        )
    }
}

export default Keyboard;
