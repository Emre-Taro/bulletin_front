import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
    user: string;
    postTitle: string;
    message: string;
    createdAt: string;
}

const AddPost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    
    const onSubmit = (data: FormData) => {
        console.log(data); // データの確認用
        // TODO: ここでデータをサーバーに送信する処理を実装
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* ユーザー名 */}
                <div>
                    <label htmlFor="user">User</label>
                    <input 
                        type="text" 
                        id="user"
                        {...register("user", { required: "ユーザー名は必須です" })}
                    />
                    {errors.user && <span style={{ color: 'red' }}>{errors.user.message}</span>}
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
                {/* 投稿日時 */}
                <div>
                    <label htmlFor="date">Date</label>
                    <input 
                        type="text" 
                        id="date"
                        {...register("createdAt", { required: "ユーザー名は必須です" })}
                    />
                    {errors.createdAt && <span style={{ color: 'red' }}>{errors.createdAt.message}</span>}
                </div>
                
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default AddPost;