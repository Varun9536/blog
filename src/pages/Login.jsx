import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login } from '../redux/Slice';
import axios from "axios"
import { toast } from 'react-hot-toast';

export default function Login() {
    const navigate = useNavigate()
    const [input, setinput] = useState({ username: "", password: "" })
    const dispatch = useDispatch()

    const putdetail = (e) => {
        setinput((prev) => {
            return ({ ...prev, [e.target.name]: e.target.value })
        })
    }


    // 

    const submitDetail = async () => {

        try {
            let result = await axios.post("http://localhost:8000/login", { password: input.password, username: input.username })
            console.log(result.data.checkUser)
            if (result.data.success) {
                let userId = String(result.data.checkUser._id)
                console.log(userId)
                localStorage.setItem("userid", userId)
                dispatch(login())
                toast.success(result.data.message)
                navigate("/blogs")
            }
            else {
                toast(result.data.message)
            }

        } catch (error) {

            console.log("error occured", error)
            toast(error.response.data.message)

        }


    }


    return (
        <>
            <Box display={"flex"} padding={3} borderRadius={5} flexDirection={"column"} maxWidth={550} margin={"90px auto"} alignItems={"center"} boxShadow="10px 10px 20px #ccc">

                <Typography variant='h4' padding={3} textAlign={"center"}  >Login</Typography>
                <TextField value={input.username} placeholder='Username' name='username' type='text' margin='normal' required onChange={putdetail} />
                {/* <TextField value={input.email} placeholder='Email' name='email' type='email' margin='normal' required onChange={putdetail} /> */}
                <TextField value={input.password} placeholder='Password' name='password' type='password' margin='normal' required onChange={putdetail} />

                <Button type='submit' variant='contained' color='primary' sx={{ borderRadius: "15px", marginTop: "10px" }} onClick={submitDetail}>Submit</Button>
                <Button type='submit' variant='contained' color='secondary' sx={{ borderRadius: "15px", marginTop: "10px" }} onClick={() => navigate("/register")}>Create New Account</Button>
            </Box>
        </>
    )
}

