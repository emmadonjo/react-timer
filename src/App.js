import logo from './logo.png';
import './App.css';
import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {sec: 0, start: true};
  }

  start(){
    this.changeStartState();
    
    if(this.state.start){
      //if the start state is true
      //start button text remains START
      
      this.timer = setInterval(()=>this.tick(), 1000);
    }else{
      this.stop();
    }
  }

  stop(){
    //set the state to true
    //this will cause the start button text to render START

    this.setState(()=>({
      start: true
    }));

    //clear the interval to stop the timer
    clearInterval(this.timer);
  }

  reset(){

    //stop the timer
    this.stop();

    //set the number of seconds to 0 
    this.setState(()=>({
      sec: 0
    }));

  }

  tick(){
    this.setState((props, state)=>({

      // increase the seconds by the props.increment value
      // in this +1 every second
      sec: this.state.sec + this.props.increment
    }));
  }


  changeStartState(){

    //start is true
    //set start to false
    if(this.state.start){

      this.setState(()=>({
        start: false
      }));

    }else{
      //else set start to true

      this.setState(()=>({
        start: true
      }));

    }
  }
  

    render(){

      // @var seconds - total seconds elapsed
      let seconds = this.state.sec;

      // @var minutes - get the minutes elapsed
      // keep within 60 seconds
      let minutes = Math.floor(seconds / 60) % 60;

      //@vae hours, get hours elapsed
      let hours = Math.floor(seconds / 3600) % 24;
      
      return(
        <div className="container">
          <h1><img width='28px' height='32px' src={logo} alt="counter logo" className='spin' /> React Timer</h1>
          
          <div className="timer-wrapper">
            <div className='timer'>
              <div>
                <span title='seconds'>
                  {seconds % 60}
                </span>                
                  <small>Seconds</small>
              </div>
              <div>
                {minutes}
                <small>Minutes</small>
              </div>
              <div>
                {hours}
                <small>Hours</small>
              </div>
            </div>
          </div>
          <div className="controls">
            <button type="button" onClick = {()=>this.start()}>{this.state.start ? 'START':'PAUSE'}</button>
            <button type="button" onClick = {()=>this.stop()}>STOP</button>
            <button type="button" onClick = {()=>this.reset()}>RESET</button>
          </div>
        </div>
      );
    }
  }


export default Counter;
