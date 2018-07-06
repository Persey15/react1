import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Button';


class App extends Component {
  render() {
    return (
         <div className= "wrapper">
            <SayF name= "Vlad" surname ="Epaneshnikov" link="vk.com" /> 
            <SayF name= "Katya" surname ="Rf" link="vk.com" /> 
            <SayF name= "Ghost" surname ="tghb" link="vk.com" /> 
    </div>
    );
  }
}


function SayF(props) {
  return (
    <div>
    <h1> Моё имя {props.name}, фамилия - {props.surname}</h1>
    <a href={props.link}> Ссылки на мой профиль </a>
    </div>
  )
}


const element = <SayF name= "Vlad" surname ="Epaneshnikov" link="vk.com" /> 


export default App;
