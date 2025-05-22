import React from "react";
import { useForm } from "react-hook-form";
import { insertPost} from "../../db/post-db/aupabase_function";
import { Post } from "../../models/interface";


const AddPost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Omit<Post, 'postId' | 'createdAt'>>();
    
    const onSubmit = async (data: Omit<Post, 'postId' | 'createdAt'>) => {
        try {
            const postData: Post = {
                ...data,
                postId: Date.now(), // 一時的なIDとして現在のタイムスタンプを使用
                created_at: new Date().toISOString()
            };
            console.log('Submitting data:', postData);
            const result = await insertPost([postData]);
            console.log('Insert result:', result);
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                width: "400px",
                padding: "30px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                }}
            >
                {/* ユーザー名 */}
                <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="username" style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
                        User
                    </label>
                    <input
                        type="text"
                        id="username"
                        {...register("username", { required: "ユーザー名は必須です" })}
                        style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        }}
                    />
                    {errors.username && (
                        <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.username.message}</span>
                    )}
                </div>

                {/* 投稿タイトル */}
                <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="posttitle" style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
                        Post title
                    </label>
                    <input
                        type="text"
                        id="posttitle"
                        {...register("postTitle", { required: "タイトルは必須です" })}
                        style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        }}
                    />
                    {errors.postTitle && (
                        <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.postTitle.message}</span>
                    )}
                </div>

                {/* 投稿メッセージ */}
                <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="message" style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        {...register("message", { required: "メッセージは必須です" })}
                        style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        maxWidth:"100%"
                        }}
                    />
                    {errors.message && (
                        <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.message.message}</span>
                    )}
                </div>

                {/* Submit ボタン */}
                <button
                type="submit"
                style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "gray",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "black")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "black")}
                    >Post</button>
            </form>
        </div>
    );
};

export default AddPost;