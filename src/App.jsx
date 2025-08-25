import React, { Component } from 'react';
import './App.css';
import { callApi, BASEURL } from './api';

class App extends Component {
  constructor(){
    super();
    this.state={A:0,B:0,RES:"0",isError:false};
    this.getResponse = this.getResponse.bind(this);
  }

  add(){
    callApi("GET", BASEURL + add/${this.state.A}/${this.state.B}, "", this.getResponse);
  }

  sub(){
    callApi("GET", BASEURL + sub/${this.state.A}/${this.state.B}, "", this.getResponse);
  }

  mul(){
    callApi("GET", BASEURL + mul/${this.state.A}/${this.state.B}, "", this.getResponse);
  }

  div(){
    callApi("GET", BASEURL + div/${this.state.A}/${this.state.B}, "", this.getResponse);
  }

  getResponse(res){
    // check if response contains error
    if (res.startsWith("Error")) {
      this.setState({RES: res, isError: true});
    } else {
      this.setState({RES: res, isError: false});
    }
  }

  loadInputChange(event){
      this.setState({[event.target.name] : event.target.value});
  }

  render() {
    const {A, B, RES, isError} = this.state;
    return (
      <>
        <header>
          <div className='title'>Simple Calculator</div>
        </header>
        <section>
          <table>
            <tr>
              <td>Enter the value of A</td>
              <td><input type='text' id='T1' name='A' value={A} onChange={(event)=>this.loadInputChange(event)} /></td>
            </tr>
            <tr>
              <td>Enter the value of B</td>
              <td><input type='text' id='T2' name='B' value={B} onChange={(event)=>this.loadInputChange(event)} /></td>
            </tr>
            <tr>
              <td>Result</td>
              <td>
                <label 
                  id='L1' 
                  className={isError ? 'error' : 'success'}>
                  {RES}
                </label>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button onClick={()=>this.add()}>ADD</button>
                <button onClick={()=>this.sub()}>SUB</button>
                <button onClick={()=>this.mul()}>MUL</button>
                <button onClick={()=>this.div()}>DIV</button>
              </td>              
            </tr>
          </table>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
