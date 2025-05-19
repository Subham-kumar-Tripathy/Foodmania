import React, { Suspense ,lazy} from 'react';
import './App.css';
import Bodycontainer from './Components/Bodycontainer';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Components/About';
import { Route, Routes } from 'react-router-dom'; 
import Resturanmenu from './Components/Resturanmenu';
import { Provider } from 'react-redux';
import Store from './Components/Store';
import Cart from './Components/Cart';
import Signin from './Signin';

function App() {
  return (
    <Provider store={Store} > 
    <div className="App">
      <Header/>
      <Routes>
        <Route path='*' element={"no Page Found"}/>
        <Route path='/' element={<Bodycontainer />} /> 
        <Route path='/About' element={<About />} /> 
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/sign-in' element={<Signin/>} />
        <Route path='/resturant/:resid' element={<Resturanmenu/>}/>
      </Routes>
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;

