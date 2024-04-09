import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/Slice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const Header = () => {


    const [valued, setvalue] = useState("")
    let login = useSelector((state) => state.isLogin)
    login = login ||localStorage.getItem("userid")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(login)

    const handleLogout = ()=>
    {
        dispatch(logout())
        localStorage.clear()
        toast.success("successfully logout")
        navigate("/login")


    }
    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h4">
                        My Blogg App
                    </Typography>
                    { login && (<Box display={"flex"} marginLeft={"auto"} marginRight={"auto"}>

                        <Tabs textColor="inherit" value={valued} onChange={(e, val) => setvalue(val)}>
                            <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
                            <Tab label="My Blogs" LinkComponent={Link} to="/myblogs" />
                            <Tab label="Create Blog" LinkComponent={Link} to="/createblog" />
                        </Tabs>

                    </Box>)}
                    <Box display={"flex"} marginLeft={"auto"}>
                        {!login && (<><Button LinkComponent={Link} to = "/login" sx={{ margin: 1, color: "white" }}>Login</Button>
                        <Button sx={{ margin: 1, color: "white" }} LinkComponent={Link} to = "/register" >Register</Button> </>)}

                        {login && (<Button sx={{ margin: 1, color: "white" }} onClick={handleLogout} >LogOut</Button>)}
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
