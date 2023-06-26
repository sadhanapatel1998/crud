import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Registration from './components/Registration'
import Showlist from './components/Showlist'
import Update from './components/Update'
import Header from './components/Header'
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Registration/>}></Route>
    <Route path='/showlist' element={<Showlist/>}></Route>
    <Route path='/update' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
      )
    }
    
    export default App
    