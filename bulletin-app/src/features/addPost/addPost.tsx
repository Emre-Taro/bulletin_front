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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* ユーザー名 */}
                <div>
                    <label htmlFor="username">User</label>
                    <input 
                        type="text" 
                        id="username"
                        {...register("username", { required: "ユーザー名は必須です" })}
                    />
                    {errors.username && <span style={{ color: 'red' }}>{errors.username.message}</span>}
                </div>
                {/* 投稿タイトル */}
                <div>
                    <label htmlFor="posttitle">Post title</label>
                    <input 
                        type="text" 
                        id="posttitle"
                        {...register("postTitle", { required: "ユーザー名は必須です" })}
                    />
                    {errors.postTitle && <span style={{ color: 'red' }}>{errors.postTitle.message}</span>}
                </div>
                {/* 投稿メッセージ */}
                <div>
                    <label htmlFor="message">Message</label>
                    <input 
                        type="text" 
                        id="message"
                        {...register("message", { required: "メッセージは必須です" })}
                    />
                    {errors.message && <span style={{ color: 'red' }}>{errors.message.message}</span>}
                </div>
                
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default AddPost;