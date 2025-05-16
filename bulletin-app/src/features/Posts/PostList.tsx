import React from "react";
import { Post } from "../../models/interface";

type Props = {
    posts: Post[];
}


const PostList = (props: Props) => {
    const {posts} = props;
    return (
        <div>
            {posts.map((post) => (
                <div style={{border: "1px solid black", borderRadius: "10px", width: "60%", height:"100px", marginBottom: "10px"}}>
                    <div key={post.postId} style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <span>{post.username}</span>
                        <span>{post.postTitle}</span>
                        <span>{post.message}</span>
                    </div>
                    <div>
                        <button >編集</button>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default PostList;