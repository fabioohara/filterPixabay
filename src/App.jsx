import { useEffect, useState } from 'react'
import { getApi } from './helpers/ConsumoApi'
import InputImg from './Components/InputImg'
import { Typography,Grid } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  /*useEffect(()=>{
    getApi('dog')
   
  },[])*/
  
  return (
    <div>
<Grid
  container
  spacing={0}
  alignItems="center"
  textAlign="center"
  style={{ minHeight: "10vh" }}
  justifyContent="center"

>
<Typography variant="h3">Proyecto Filter Pixabay</Typography>

</Grid>
    <InputImg />
    </div>
  )
}

export default App
