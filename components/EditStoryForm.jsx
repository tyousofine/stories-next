'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditStoryForm({id, title, detail}){


  const [newTitle, setNewTitle] = useState(title);
  const [newDetail, setNewDetail] = useState(detail)

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`http://localhost:3000/api/stories/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({newTitle, newDetail}),
      })
  
      if(!res.ok) {
        throw new Error('Could not update story')
      }
      router.refresh()
      router.push('/')

    } catch (error) {
      console.log("Something went wrong with update", error)
    }
  }
  
  return (
    <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-3">
    <input 
    onChange={(e) => setNewTitle(e.target.value)}
    value={newTitle}
    className="border border-slate-500 px-8 py-2"
    type="text"
    placeholder="Story Title"
   />
    <input
    onChange={(e) => setNewDetail(e.target.value)}
    value={newDetail}
    className="border border-slate-500 px-8 py-2"
    type="text"
    placeholder="Story Detail"
    />
    <button className="bg-green-600 font-bold py-3 px-6 text-white w-fit rounded-sm">Update Story</button>
</form>
  )
}
