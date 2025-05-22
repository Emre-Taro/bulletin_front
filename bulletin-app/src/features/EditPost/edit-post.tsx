import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllPost } from "../../db/post-db/aupabase_function";
import { Post } from "../../models/interface";

const EditPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState<Post | null>(null);
      useEffect(() => {
          const getPosts = async() => {
              const Allposts = await getAllPost();
              const foundPost = Allposts?.find((p) => String(p.postId) === postId);
              setPost(foundPost)
              console.log("Allposts", Allposts)
              console.log("SoundPost", foundPost)
          }   
          getPosts();
      },[postId])

      const saveHandler = () => {
        alert("modified")
      }


    return (
        <div>
            <h2>投稿を編集</h2>
            <div>{post?.postId}</div>
            <input type="text" />

            <div>
                <button onClick = {saveHandler}>Save the post</button>
            </div>
        </div>
    );

};
export default EditPost;