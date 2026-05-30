import { supabase } from "./supabase";

export async function getCourses() {
  const result = await supabase
    .from("courses")
    .select("*");

  console.log("RESULT:", result);


  return result.data ?? [];
}