
import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'


export default function Blog() {

    const [bloger, setblog] = useState({})

    function fetchingdata() {
        async function orignaldata() {
            let result = await fetch("http://localhost:8000/blog/getallblog")
            result = await result.json()
            // console.log(result)
            setblog(result)

        }

        orignaldata()
    }

    // fetchingdata()
    useEffect(() => {
        fetchingdata()
    }, [])


if(bloger.success)
{
    return (
        <>
            {bloger.allBlog.map((item , index)=>
            (
                <div key = {index}>
                    <BlogCard  title = {item.title} description = {item.description}  username= {item.user.username}  image = {item.image} date = {item.createdAt}/>
                </div>
            ))}
        </>
    )
}

else
{
    return (
        <h2>No blog available </h2>
    )
}
}
