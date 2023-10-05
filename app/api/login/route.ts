import { redirect } from "next/navigation";

export default async function submit(formData:FormData){
    console.log(formData.get("email"));
    redirect("/")
}