import React from 'react'
import './App.css';
import './index.css'
import {  Routes, Route, git  BrowserRouter } from 'react-router-dom'
import { Navbar,Brand} from './components';
import {Blog,Footer,Header,Possibility,WhatGPT, Features} from './containers'
// import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Notgit found from './components/notfound/Notfound';
import FormData from './components/signin&signup/formData';
import Register from './components/signin&signup/Register';
function Router() {
  return (
    <>
      <BrowserRouter>
       <div className="App">
       <div className="gradient__bg">
        <Navbar/>
       </div>
       <div>
<Routes>
  <Route path='/' element={<Header/>}/>
  <Route path='/*' element={<Notfound/>}/>
  <Route  path='/whatgpt' element={<WhatGPT/>}/>
  <Route path='/features' element={<Features/>}/>
  <Route path='/possibility' element={<Possibility/>}/>
  <Route path='/library' element={<Blog/>}/>
  <Route path='/sign' element={<FormData/>}/>
  <Route path='/register' element={<Register/>}/>

</Routes>
</div>
    </div>
</BrowserRouter>
    </>
  )
}

export default Router
