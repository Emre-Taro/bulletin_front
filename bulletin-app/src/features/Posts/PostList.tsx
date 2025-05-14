import React from "react";
import { Post } from "../../models/interface";

type Props = {
    posts: Post[];
}


const PostList = (props: Props) => {
    const {posts} = props;

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.message}
                        <span>first post</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default PostList;