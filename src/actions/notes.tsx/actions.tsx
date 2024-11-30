// "use server";

// import { createClient } from "@/utils/supabase/server";
// import { revalidatePath } from "next/cache";

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export async function addDockitt(formData: FormData) {
//   const supabase = await createClient();

//   const {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     data: { user },
//   } = await supabase.auth.getUser();

//   const { error } = await supabase
//     .from("dockitts")
//     .insert([
//       {
//         id: Date.now(),
//         task: formData.get("task") as string,
//         status: "Backlog",
//         priority: formData.get("priority") as string,
//         tag: formData.get("tag") as string,
//         description: formData.get("description") as string,
//       },
//     ])
//     .select();
//   if (error) {
//     throw new Error(error.message);
//   }

//   revalidatePath("/");
// }

// export async function updateDockittStatusForward({
//   id,
//   currentStatus,
// }: {
//   id: number;
//   currentStatus: string;
// }) {
//   const supabase = await createClient();
//   const { data, error } = await supabase
//     .from("dockitts")
//     .update({
//       status:
//         currentStatus === "Backlog"
//           ? "In Progress"
//           : currentStatus === "In Progress"
//           ? "Under Review"
//           : "Completed",
//     })
//     .eq("id", id) // where 'specificId' is the ID you're targeting
//     .select();

//   revalidatePath("/");
// }

// export async function updateDockittStatusBackwards({
//   id,
//   currentStatus,
// }: {
//   id: number;
//   currentStatus: string;
// }) {
//   const supabase = await createClient();
//   const { data, error } = await supabase
//     .from("dockitts")
//     .update({
//       status:
//         currentStatus === "Completed"
//           ? "Under Review"
//           : currentStatus === "Under Review"
//           ? "In Progress"
//           : "Backlog",
//     })
//     .eq("id", id) // where 'specificId' is the ID you're targeting
//     .select();

//   revalidatePath("/");
// }
// export async function updateDockittStatusCancelled({
//   id,
// }: {
//   id: number;
// }) {
//   const supabase = await createClient();
//   const { data, error } = await supabase
//     .from("dockitts")
//     .update({
//       status: "Cancelled",
//     })
//     .eq("id", id) // where 'specificId' is the ID you're targeting
//     .select();

//   revalidatePath("/");
// }

// export async function deleteDockitt({
//   id,
// }: {
//   id: number;
// }) {
//   const supabase = await createClient();
//   const { data, error } = await supabase
//     .from("dockitts")
//     .delete()
//     .eq("id", id) // where 'specificId' is the ID you're targeting
//     .select();

//   revalidatePath("/");
// }