import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <tr>
                <td colSpan="3"> <input className="result" type="text" id="result-box" value={this.props.result} readOnly/> </td>
                <td> <input type="button" value="Clear" onClick={e => this.props.onClick(e.target.value)} /> </td>
            </tr>
        )
    }
}

export default Result;
