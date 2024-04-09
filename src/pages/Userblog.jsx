import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserBlogCard from '../components/UserblogCard'

export default function Userblog() {

    const [userblogs, setuserblogs] = useState([])
    const userid = localStorage.getItem("userid")
    console.log(userid)
    function fetchdata() {
        async function orignalfetchingdata() {
            try {
                let allblog = await axios.get(`http://localhost:8000/blog/userallblog/${userid}`)
                setuserblogs(allblog.data.allblog)
                console.log(allblog.data.allblog)

            } catch (error) {

                console.log("error occured", error)

            }
        }

        orignalfetchingdata()
    }

    useEffect(() => {
        fetchdata()
    }, [])


    if (userblogs.length > 0) {
        return (
            <>
                {userblogs.map((item, index) =>
                (
                    <div key={index}>
                        <UserBlogCard title={item.title} description={item.description} username={item.user.username} image={item.image} date={item.createdAt}  blogId = {item._id}/>
                    </div>
                ))}
            </>
        )
    }

    else {
        return (
            <h2 >No blog available </h2>
        )
    }
}
