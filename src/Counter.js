import React from 'react'
import {connect} from 'react-redux';
import './Counter.css';
import 'bootstrap/dist/css/bootstrap.css';


const mapStateToProps=state => {

    return {
    count:state.count

    }}




const Counter = (props) => {

    const increment = () => {
        props.dispatch({ type: "INCREMENT" });
      };
     
      const decrement = () => {
        props.dispatch({ type: "DECREMENT" });
      };

      const reset = () => {
        props.dispatch({ type: "RESET" });
      };
    
    return (
        <div>

                
    
    <div id="count">
    <h1>My Beatiful Counter</h1>   
    
    
    <div id="counting_box">
        
    <button  type="button" className="btn btn-success" onClick={()=>increment()}>+</button>
    <p><span>{props.count}</span></p>
    <button type="button" className="btn btn-danger" onClick={()=>props.count>0?decrement():""}>-</button>
    <button type="button" class="btn btn-warning" onClick={()=>reset()}>RESET</button>
        </div> </div>
        </div>
    )
}

export default connect(mapStateToProps)(Counter)

