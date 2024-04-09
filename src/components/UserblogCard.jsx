import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Box, Button, dividerClasses } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function UserBlogCard({ title, description, image, username, date, blogId }) {

    const navigate = useNavigate()
    const id = blogId

    let updation = true


    async function deleteuserblog() {
        try {
            let permission = confirm("you want to delete blog")

            if (permission) {
                const result = await axios.delete(`http://localhost:8000/blog/deleteblog/${id}`)
                console.log(result, "deleted")
                window.location.reload()
                toast.success(result.data.message)
            }
            else {
                return
            }
        } catch (error) {
            console.log(" blog not deleted", error)
        }
    }

    const updateuserblog = () => {
        let permission = confirm("are you sure to update blog")
        if (permission) {
            localStorage.setItem("blogid", id)
            navigate("/updateblog")
        }

        else {
            return
        }

    }




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

            <Box display={"flex"} justifyContent={"space-between"} width={"40%"} margin={"10px auto"}>
                <Button variant='outlined' sx={{ color: "#ff4d4d", fontWeight: "bold" }} onClick={deleteuserblog} >Delete</Button>
                <Button variant='outlined' sx={{ color: "#db4dff", fontWeight: "bold" }} onClick={updateuserblog} >Update</Button>
            </Box>


        </Card>
    )
}