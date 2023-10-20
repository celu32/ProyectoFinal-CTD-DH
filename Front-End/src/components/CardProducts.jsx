/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CardProducts({name, url, city }) {

    return (
            <Card  >

                <CardActionArea sx={{ 
                    width: 600,
                    height: 200,
                    border:'none',
                    backgroundColor: '#EDEBEE',
                    padding: '20',
                    display:'flex',
                    flexDirection: 'row'
                    }}
                 >
                    <CardMedia
                    component="img"
                    height={150}
                    image={url}
                    />
                    <CardContent sx={{ 
                    width: 600,
                    border:'none',
                    color: '#1F2E7B',
                    padding: '10',          
                    }}>
                    <Typography variant="h5" component="h3">
                        {name}
                    </Typography>
                    <Typography variant="h5" component="h5">
                        {city}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>   
        )}

  export default CardProducts;