import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate()
    const [input, setinput] = useState({ username: "", email: "", password: "" })

    const putdetail = (e) => {
        setinput((prev) => {
            return ({ ...prev, [e.target.name]: e.target.value })
        })
    }


    // 

    const submitDetail = async () => {

        try {
            let data = await fetch("http://localhost:8000/registeruser", {
                method: "post",
                body: JSON.stringify({ username: input.username, password: input.password, email: input.email }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            data = await data.json()
            console.log(data)
            if(data.success)
            {
                toast.success(data.message)
                navigate("/login")
            }
            else
            {
                toast( `${data.message} , please login` )
            }

        } catch (error) {

            console.log("error occured" , error)

        }


    }


    return (
        <>
            <Box display={"flex"} padding={3} borderRadius={5} flexDirection={"column"} maxWidth={550} margin={"auto"} alignItems={"center"} boxShadow="10px 10px 20px #ccc">

                <Typography variant='h4' padding={3} textAlign={"center"}  >Register</Typography>
                <TextField value={input.username} placeholder='Username' name='username' type='text' margin='normal' required onChange={putdetail} />
                <TextField value={input.email} placeholder='Email' name='email' type='email' margin='normal' required onChange={putdetail} />
                <TextField value={input.password} placeholder='Password' name='password' type='password' margin='normal' required onChange={putdetail} />

                <Button type='submit' variant='contained' color='primary' sx={{ borderRadius: "15px", marginTop: "10px" }} onClick={submitDetail}>Submit</Button>
                <Button type='submit' variant='contained' color='secondary' sx={{ borderRadius: "15px", marginTop: "10px" }} onClick={() => navigate("/login")}>Already registered ? Please Login</Button>
            </Box>
        </>
    )
}
