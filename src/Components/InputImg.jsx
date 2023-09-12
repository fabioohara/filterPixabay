import React, { useState } from 'react'
import { PintadoImg } from './PintadoImg'
import { Container, TextField, Button, Box } from '@mui/material'


const InputImg = () => {
    const[valorInput,setValorInput]=useState("dog")
    const captura =(e)=>{
        e.preventDefault()
        let input=document.querySelector("input")
        setValorInput(input.value)
    }

  return (
<Container>
<Box style={{ display: 'flex', alignItems: 'stretch',gap:30, }}>
  <TextField label="Buscar" style={{ flex: 2 }}></TextField>
  <Button variant="contained" style={{ flex: 1 }} onClick={captura}>Buscar...</Button>
</Box>
               
                 
   
    
    <PintadoImg valor={valorInput}/>

    </Container>
  )
}

export default InputImg