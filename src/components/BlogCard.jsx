import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function BlogCard({ title, description, image, username, date }) {


    return (
        <Card sx={{ width: "35%", margin: "10px auto", borderRadius: "20px", boxShadow: "5px 5px 3px #ccc" }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {username}
                    </Avatar>
                }
                title={title}
                subheader={date}
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt={username}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">

                    {description}
                </Typography>
            </CardContent>


        </Card>
    );
}