
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {
    constructor(){
        super(); //Error 1
        //Need super for calling this.XXXX
         this.state={
           counter:0,
         }
         //binding to increment 
         this.increment = this.increment.bind(this);
         this.decrement = this.decrement.bind(this);
         this.reset = this.reset.bind(this);
        }
    render() {
        return (
          <div className="counter">
            <CounterButton by={1}incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5}incrementMethod={this.increment}decrementMethod={this.decrement}/>
            <CounterButton by={10}incrementMethod={this.increment}decrementMethod={this.decrement}/>
            <span className="count">{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        )
      }
      reset() {
        this.setState({counter: 0});
      }
      increment(by){     
    
      //  console.log(`increment from parent-${by}`);
      this.setState(
        (prevState)=>
        {
   
      return{counter:prevState.counter+by}
      
   
     }) 
     }
     decrement(by){     
    
      //  console.log(`increment from parent-${by}`);
      this.setState(
        (prevState)=>
        {
   
      return{counter:prevState.counter-by}
      
   
     }) 
     }
    }
class CounterButton extends Component {

    //Define the initial state in a constructor
    //state => counter 0
    
//constructor(){
//super(); //Error 1
//Need super for calling this.XXXX
//  this.state={

//     counter:0,
  
   
//  }
//  //binding to increment 
//  this.increment = this.increment.bind(this);
//  this.decrement = this.decrement.bind(this);
 //}
//var list=[1,2,3,4]
//list.forEach(x=>console.log(2*x));
    render(){
//    render=()=>    
   //const style={fontSize:"50 px",padding:"15px 30px"}; 
    return (
      <div className="counter">
          {/* //below is added button */}
      <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
      <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
      {/* 0 is defined */}
     {/* <span className="count"  
     //=How to add style in function line 29#style={style}
     >{this.state.counter}</span> */}
     
      </div>
    )
  }

  // increment()

  // {
   
  //    // console.log('increment');
  //   // this.state.counter++ //Bad Practice

  //  this.setState({

  //   counter:this.state.counter+this.props.by
  //  }) 
  //  this.props.incrementMethod(this.props.by);
  // }
  // decrement () {
  //   this.setState({
  //       counter: this.state.counter - this.props.by
  //   });
    
  //   this.props.decrementMethod(this.props.by);
  // }

//   function increment()

//   {
  
//       console.log('increment');
//   }

}
//default props for Counter/>
CounterButton.defaultProps = {
    by : 1
}
 
//Check if counter increment is a number 
CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter
