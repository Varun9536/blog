import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Createblog() {
    const id = localStorage.getItem("userid")
    const [blogdetail, setblogdetail] = useState({ title: "", description: "", image: "", user: id })
    const navigate = useNavigate()

    const putdetail = (e) => {
        setblogdetail((prev) => {
            return ({ ...prev, [e.target.name]: e.target.value })
        })

        console.log(blogdetail)
    }

    const detailsubmit = async (e) => {

        try {
            let result = await axios.post("http://localhost:8000/blog/createblog", {
                title: blogdetail.title, description: blogdetail.description, image: blogdetail.image, user: blogdetail.user
            })
            toast.success(result.data.message)
            navigate("/myblogs")

            if (result.data.success === false) {

                toast(result.data.message)

            }
        }

        catch (error) {
            toast(" blog post not created")
        }


    }


    return (

        <>
            <Box width={"70%"} border={3} borderRadius={10} margin="30px auto" padding={5} boxShadow={"10px 10px 10px #ccc"} display={"flex"} flexDirection={"column"}>
                <Typography variant='h4' textAlign={"center"} fontWeight={"bold"} > Create Your <span style={{ color: "#cc00ff" }}>Blog Post</span> </Typography>


                <InputLabel sx={{ marginBottom: "3px", fontWeight: "bold", fontSize: "25px", color: "#3377ff" }}>Title</InputLabel>
                <TextField variant='outlined' name='title' sx={{ marginBottom: "27px" }} onChange={putdetail} required />

                <InputLabel sx={{ marginBottom: "3px", fontWeight: "bold", fontSize: "25px", color: "#3377ff" }}>Description</InputLabel>
                <TextField variant='outlined' name='description' sx={{ marginBottom: "27px" }} onChange={putdetail} required />

                <InputLabel sx={{ marginBottom: "3px", fontWeight: "bold", fontSize: "25px", color: "#3377ff" }}>Add image Link</InputLabel>
                <TextField variant='outlined' name='image' sx={{ marginBottom: "27px" }} onChange={putdetail}  />

                <Button color='success' variant='contained' onClick={detailsubmit}>Create Blog</Button>
            </Box>

        </>
    )
}
