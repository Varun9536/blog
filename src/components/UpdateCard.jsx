import React from 'react'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'

export default function UpdateCard() {

    const id = localStorage.getItem("blogid")
    console.log(id)

    const [blogdetail, setblogdetail] = useState({ title: "", description: "", image: "", })
    const navigate = useNavigate()

    const putdetail = (e) => {
        setblogdetail((prev) => {
            return ({ ...prev, [e.target.name]: e.target.value })
        })

        console.log(blogdetail)
    }

    const detailsubmit = async (e) => {

        try {
            let result = await axios.put(`http://localhost:8000/blog/updateblog/${id}`, {
                title: blogdetail.title, description: blogdetail.description, image: blogdetail.image
            })
            localStorage.removeItem("blogid")
            toast.success(result.data.message)
            navigate("/myblogs")

            if (result.data.success === false) {

                toast(result.data.message)

            }
        }

        catch (error) {
            console.log(error)
            toast(" blog post not updated")
        }


    }


    return (
        <>
            <Box width={"70%"} border={3} borderRadius={10} margin=" 30px auto" padding={5} boxShadow={"10px 10px 10px #ccc"} display={"flex"} flexDirection={"column"}>
                <Typography variant='h4' textAlign={"center"} fontWeight={"bold"} > Update your <span style={{ color: "#cc00ff" }}>Blog Post</span> </Typography>


                <InputLabel sx={{ marginBottom: "3px", fontWeight: "bold", fontSize: "25px", color: "#3377ff" }}>Update Title</InputLabel>
                <TextField variant='outlined' name='title' sx={{ marginBottom: "27px" }} onChange={putdetail} />

                <InputLabel sx={{ marginBottom: "3px", fontWeight: "bold", fontSize: "25px", color: "#3377ff" }}> Update Description</InputLabel>
                <TextField variant='outlined' name='description' sx={{ marginBottom: "27px" }} onChange={putdetail} />

                <InputLabel sx={{ marginBottom: "3px", fontWeight: "bold", fontSize: "25px", color: "#3377ff" }}> Update image Link</InputLabel>
                <TextField variant='outlined' name='image' sx={{ marginBottom: "27px" }} onChange={putdetail} />

                <Button color='success' variant='contained' onClick={detailsubmit}>Update</Button>
            </Box>
        </>
    )
}
