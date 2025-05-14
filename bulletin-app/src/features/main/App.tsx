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
            <div>Hello world</div>
            <p>hello world guys</p>
            <PostList posts={posts}/>
        </>
    );
};

export default App;