import { createClient } from "@supabase/supabase-js";
import type { Comment, CreateCommentInput } from "../types/comments";

function getSupabaseClient() {
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("PUBLIC_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY is not set.");
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function getComments(postSlug: string): Promise<Comment[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("comments")
    .select("id, created_at, email, name, post_slug, body, parent")
    .eq("post_slug", postSlug)
    .order("created_at", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []) as Comment[];
}

export async function createComment(input: Omit<CreateCommentInput, "created_at">): Promise<Comment> {
  const supabase = getSupabaseClient();
  const payload: CreateCommentInput = {
    ...input,
    created_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("comments")
    .insert(payload)
    .select("id, created_at, email, name, post_slug, body, parent")
    .single();

  if (error) {
    throw error;
  }

  return data as Comment;
}
