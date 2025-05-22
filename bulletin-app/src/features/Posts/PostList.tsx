import React from "react";
import { Post } from "../../models/interface";
import {Link } from "react-router-dom";

type Props = {
    posts: Post[];
}


const PostList = (props: Props) => {
    const {posts} = props;
    return (
        <>
        <div style={{ width: "100%", marginBottom: "20px", display: "flex", justifyContent: "center" }}>
            <Link 
                to="/add-post" 
                style={{
                border: "1px solid black",
                borderRadius: "15px",
                padding: "10px 20px",
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
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
            >
                Create post
            </Link>
            </div>

            <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "15px",
            justifyContent: "center",
            }}>
                {posts.map((post) => (
                    <Link 
                        key={post.postId} 
                        to={`/posts/${post.postId}`}
                        style={{
                            border: "1px solid black",
                            borderRadius: "10px",
                            width: "300px",
                            height: "150px",
                            margin: 0,
                            padding: "15px",
                            textDecoration: "none",
                            color: "inherit",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            transition: "box-shadow 0.2s ease",
                        }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)"}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)"}
                            >
                            <div style={{ fontWeight: "600", marginBottom: "10px", fontSize: "1rem" }}>
                                {post.username}
                            </div>
                            <div style={{ fontSize: "0.9rem", color: "#555" }}>
                                {post.postTitle}
                            </div>
                    </Link>
            ))}
        </div>
        </>
    );
};


export default PostList;