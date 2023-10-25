
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom"

const CardProducts = ({ name, url, city, id }) => {

    let ruta = ('./' + id)

    return (
        <Card >
        <Link to={ruta}>

            <CardActionArea sx={{
                width: 600,
                height: 200,
                border: 'none',
                backgroundColor: '#EDEBEE',
                padding: '20',
                display: 'flex',
                flexDirection: 'row'
            }}

            >
                <CardMedia
                    component="img"
                    height={150}
                    image={url}
                    sx={{ margin: '20px' }}
                />

                <CardContent sx={{
                    width: 600,
                    border: 'none',
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
            </Link>
        </Card>
    )
}

export default CardProducts;