import React from "react";
import {useEffect, useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import { getAllPost } from "../../db/post-db/aupabase_function";
import PostList from "../Posts/PostList";
import AddPost from "../addPost/addPost";
import PostDetail from '../PostDetail/postDetail'; 
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
                <div>
                    <Link to="/" 
                    style={{
                        border: "1px solid black",
                        borderRadius: "15px",
                        padding: "10px 20px",
                        width:"10%",
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        userSelect: "none",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#f0f0f0"}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}>
                            Home</Link> 
                </div>
                
            </nav>

            <Routes>
                <Route path="/" element={<PostList posts={posts}/>} />
                <Route path="/add-post" element={<AddPost />} />
                <Route path="/posts/:postId" element={<PostDetail />} />
                <Route path="/posts/:postId/edit-post" element={<EditPost/>} />
            </Routes>
        </div>
    );
};

export default App;