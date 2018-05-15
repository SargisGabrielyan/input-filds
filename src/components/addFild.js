import React from 'react';
import store from '../store/store'
import {connect} from 'react-redux';


class AddFild extends React.Component{
    showAddFilds () {
        document.getElementById('addFilds').style.display = "block";
    }
    AddFild () {
        document.getElementById('addFilds').style.display = "none";
        var addFildValue = document.getElementById('newFild').value;
        if(addFildValue == ''){
            alert('Please enter the fild name')
        }else{
            addFildValue = addFildValue.slice(0,1).toUpperCase() + addFildValue.slice(1);
            store.dispatch({
                type: 'ADD_NEW_FILD',
                payload: {
                    name: addFildValue
                }
            })
        }
        
    }
    render() {
        return (
            <div className="inputFilds">
                <input type='button'  value='Add fild' onClick={this.showAddFilds}/>
                <div id="addFilds">
                    <input type="text" id="newFild" defaultValue=''/>
                    <input type='button'  value='Add' onClick={this.AddFild}/>
                </div>
            </div>
        )
    }
};



export default connect(
    (store) => {return {inputs: store.inputs};}
)(AddFild);