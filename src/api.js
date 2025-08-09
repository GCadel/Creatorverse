import { CREATORS, supabase } from "./client"

export async function fetchAllCreators() {
  const { error, data } = await supabase
    .from(CREATORS)
    .select()

    .order("created_at", { ascending: false })
  if (!error) {
    return data
  }
}

export async function getCreatorById(id) {
  const { error, data } = await supabase
    .from(CREATORS)
    .select()
    .eq("id", id)
    .single()
  if (!error) {
    return data
  }
}

export async function insertNewCreator(data) {
  const error = await supabase.from(CREATORS).insert(data)
  if (!error) {
    return { message: "good" }
  }
  return { message: "no good" }
}

export async function updateCreatorById(id, data) {
  const { error } = await supabase.from(CREATORS).update(data).eq("id", id)
  if (!error) {
    return { message: "good" }
  }
  return { message: "no good" }
}

export async function deleteCreatorById(id) {
  const { error } = await supabase.from(CREATORS).delete().eq("id", id)
  if (!error) {
    return { message: "good" }
  }
  return { message: "no good" }
}
