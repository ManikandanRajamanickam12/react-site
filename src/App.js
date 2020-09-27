import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Router } from 'react-router-dom';
import About from './component/About';
import Footer from './component/Footer';
import SelectedItem from './component/SelectedItem';
import Header from './component/Header';
import Home from './component/Home';
import  Menu  from './Menu';
import { DISHES } from './dishes';
import Contact from './component/contact';
function App() {
  return (
    <div className="App">
      
     <Header/>
     <Route path="/" exact>
        <Home />
    </Route>
    
     
    <Route path='/menu' exact>
        <Menu DISHES={DISHES}/>
    </Route>
    {DISHES.map(dish =>
    <Route path={'/menu/'+ dish.name} exact > 
    <SelectedItem dishSelected = {dish}/> 
    </Route>
    )} 
     <Route path='/about' exact>
      <About />
    </Route>
    <Route path='/contact' exact>
     <Contact/>
    </Route>
    
    <Footer />
    </div>
  );
}

export default App;
