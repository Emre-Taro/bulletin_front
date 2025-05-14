import React from "react";
import {useEffect, useState} from "react";
import { getAllPost } from "../../db/post-db/aupabase_function";
import PostList from "../Posts/PostList";

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
        <>
            <div>
                <form method="post">
                    <div>
                        <label htmlFor="user">User</label>
                        <input type="text" id="user"/>
                    </div>
                    <div>
                        <label htmlFor="message">message</label>
                        <input type="text" id="message"/>
                    </div>
                    
                    <button>Post</button>
                </form>
                <PostList posts={posts}/>
            </div>
        </>
    );
};

export default App;