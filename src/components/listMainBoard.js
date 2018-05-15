import React from 'react';


class ListMainBoard extends React.Component{
    render() {
        return (
            <div className="inputFilds">
                <label>
                    <span className="inputNames">{this.props.input.name} </span>
                    <input type={this.props.input.type} defaultValue={this.props.input.value}  placeholder={this.props.input.name.toLowerCase()}/>
                </label>
            </div>
        )
    }
};

export default ListMainBoard;