import React from 'react';
import {connect} from 'react-redux';
import ListMainBoard from './listMainBoard';
import AddFild from './addFild';

class Content extends React.Component{
    render() {
        return (
            <div className="content">
                {this.props.inputs.map(function(item, i){
                    console.log(item)
                        return <ListMainBoard key={i}input={item}/>
                    })
                }
                <AddFild />
            </div>
            
        )
    }
};
export default connect(
    (store) => {return {inputs: store.inputs};}
)(Content);