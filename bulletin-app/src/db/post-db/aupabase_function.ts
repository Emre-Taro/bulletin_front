import { Post } from "../../models/interface";
import { supabase } from "../post-db/supabase";

// fetch data
export const getAllPost = async () => {
    const posts = await supabase.from("bulletin-app-db").select("*");
    return posts.data
}

// insert data 
export const insertPost = async(post: Post[]) => {
    try {
        const { data, error } = await supabase
            .from("bulletin-app-db")
            .insert(post)
            .select()
            .single();

        if (error) {
            console.error('Supabase error:', error);
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error in insertPost:', error);
        throw error;
    }
}