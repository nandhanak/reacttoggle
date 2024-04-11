import React ,{useState}from 'react'
import  "./Component/colo.css";
import bulb from "./image.jpg/bulb.jpg"
import Button from '@mui/material/Button';
import Heading from './Component/Heading';

import bulb2 from "./image.jpg/bulb2.jpg"

export default function App() {
  const [togeFun,setTog]=useState(false)

const funToggle= () =>{
setTog(!togeFun)
};



  return (
    <div>
      <Heading/>
     
    
      <img src={togeFun?bulb:bulb2}className='size' alt="" />
      <Button variant="outlined"className='position'  onClick={funToggle}>{togeFun ? "switchOn" : "switchOff"}</Button>

     
    
    
     
  
    </div>

  )
};

   