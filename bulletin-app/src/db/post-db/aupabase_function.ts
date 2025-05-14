import { supabase } from "../post-db/supabase";

export const getAllPost = async () => {
    const posts = await supabase.from("bulletin-app-db").select("*");
    return posts.data
}