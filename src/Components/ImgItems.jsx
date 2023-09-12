import React from 'react'
import { Grid,Card,CardMedia,CardContent } from '@mui/material'
import { FaComment,FaCheck,FaEye } from "react-icons/fa";

export const ImgItems = ({previewURL,likes,views,comments}) => {
  return (
<>
    <Grid item md={3} xs={3}>
    <Card>
        <CardMedia component="img" image={previewURL} height={200}
          sx={{  objectFit:"cover" }}/>
        <CardContent>
            <div style={{ display: 'flex', alignItems: 'center',justifyContent:'space-between'}}>
            <FaEye color='red'/>{views}<FaCheck color='red'/>{likes}<FaComment color='red'/>{comments}
            </div>
           
        </CardContent>
    </Card>
    </Grid>
    </>

   
  )
}

