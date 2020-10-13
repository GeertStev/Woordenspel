import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

const klinkers = ["a","aa","e","ee","o","oo","i","ui"];
const medeklinkers = ["m","n","l","s","t","k","p"];


function genereerWoord() {
  const medeklinker_voor = medeklinkers[~~(Math.random() * medeklinkers.length)];
  const klinker_midden = klinkers[~~(Math.random() * klinkers.length)];  
  const medeklinker_achter = medeklinkers[~~(Math.random() * medeklinkers.length)];
  
  return([medeklinker_voor+klinker_midden+medeklinker_achter, medeklinker_voor, klinker_midden+medeklinker_achter, klinker_midden,medeklinker_achter] )
} 


class Woord extends React.Component {
  
  constructor(props){
    super(props);
    this.woord = genereerWoord();
    this.state = {splitsingTonen: 0,
                  woordTonen: this.woord[0]};
    
    this.splitsClick = this.splitsClick.bind(this);
    this.volgendeClick = this.volgendeClick.bind(this);
  }
  
  splitsClick() {
    this.setState(prevState => ({
      splitsingTonen: prevState.splitsingTonen + 1
    }));
  }
  
  volgendeClick() {
    this.woord = genereerWoord();
    this.setState(prevState => ({
      splitsingTonen: 0
    }));
  }
  
  
  render() {
   
    return(
      <div>
      <div
        className="left"
        onClick={this.splitsClick}>
        <h1>&#128075;</h1>
      </div>
      <div
        className="main">
        <h1>{this.woord[0]}</h1>
        <h1>{this.state.splitsingTonen>=1 ? this.woord[1]+" "+this.woord[2] : ""}</h1>
        <h1>{this.state.splitsingTonen>=2 ? this.woord[3]+" "+this.woord[4] : ""}</h1>
      </div>
      <div
        className="right"
        onClick={this.volgendeClick}>
        <h1>&#128077;</h1>
      </div>
      </div>
    );
  }
}

export default Woord;
