import React, { useEffect,useState } from 'react'
import { getApi } from '../helpers/ConsumoApi'
import { ImgItems } from './ImgItems'
import { Grid,Container } from '@mui/material'


export const PintadoImg = ({valor}) => {
    const[infoApi,setInfoApi]=useState([]);
    
    useEffect(()=>{
        getApi(valor).then((newImages)=>setInfoApi(newImages.hits))
    },[valor])
    
    
      return (
       
      
        <Grid container spacing={3} mt={5}>

        
            {infoApi.map((img)=>{
                return <ImgItems key={img.id}{...img}/>
            })}
       
        </Grid>
     
       
      )
    }