import { Link, useParams } from 'react-router-dom';
import React from "react";
import { Post } from "../../models/interface"

function PostDetail() {
  const { postId } = useParams();

  // データ取得処理（APIからfetchなど）をここに書くことが多いです
  return (
    <div>
      <h2>投稿詳細</h2>
      <p>この投稿のID: {postId}</p>
      <div>
          <Link to={`/posts/${postId}/edit-post`}>Edit post</Link> 
      </div>

      {/* comment area */}
      <div style={{width:"100%"}}>
        <div style={{border: "1px solid black", margin: "20px 5px 0 5px", width:"100%", height:"1000px"}}>
          <h3>コメント欄</h3>
          <div>
            <p>すごい</p>
            <p>おもろい</p>
          </div>
          <div style={{}}>
            <input type="text" style={{}}/>
          </div>


        </div>
      </div>

    </div>
  );
}

export default PostDetail;