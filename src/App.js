import { Contactme } from './components/Contactme';
import { Aboutme } from './components/Aboutme';
import { Front } from './components/Front';
import { Navbar } from './components/Navbar';
import {Projects} from './components/Projects'
import { Footear } from './components/Footear';

import React from 'react'

function App() {
  const [show,setShow]=React.useState(false)
  React.useEffect(()=>{
    setShow(true)
  },[])

  
  return (
    show && <div className="App">
      <Front/>
      <Navbar/>
      <Aboutme/>
      <Projects/>
      <Contactme/>
      <Footear/>
    </div>
  )
}

export default App;
