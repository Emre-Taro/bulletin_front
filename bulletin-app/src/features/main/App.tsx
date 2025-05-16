import React from "react";
import {useEffect, useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import { getAllPost } from "../../db/post-db/aupabase_function";
import PostList from "../Posts/PostList";
import AddPost from "../addPost/addPost";
import EditPost from "../EditPost/edit-post";

const App = () => {
    const [posts, setPosts] = useState<any>([]);
    useEffect(() => {
        const getPosts = async() => {
            const posts = await getAllPost();
            setPosts(posts);
            console.log(posts);
        }   
        getPosts();
    },[])

    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/add-post">Create post</Link> |<Link to="/esit-post">Edit post</Link>
            </nav>

            <Routes>
                <Route path="/" element={<PostList posts={posts}/>} />
                <Route path="/add-post" element={<AddPost />} />
                <Route path="/edit-post" element={<EditPost/>} />
            </Routes>
        </div>
    );
};

export default App;