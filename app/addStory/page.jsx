"use client"

import { useState } from "react"
import {useRouter } from 'next/navigation'

export default function AddStory() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const saveStory = async (e) => {
    e.preventDefault();
  
    if(!title || !detail) {
      alert('Title and detail are required.')
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/stories', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body:  JSON.stringify({title, detail})
      })

      if(res.ok) {
        router.refresh();
      router.push('/')
      } else {
      throw new Error('Failed to create story')
      }

    } catch (error) {
      console.log('Error saving story', error)
    }

  }


  return (
    <form  
        onSubmit={saveStory}
        className="flex flex-col gap-3">
        <input 
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Story Title"
        onChange={(e) => setTitle(e.target.value)} />
        <input 
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Story Detail"
        onChange={(e) => setDetail(e.target.value)} />
        <button className="bg-green-600 font-bold py-3 px-6 text-white w-fit rounded-sm">Add Story</button>
    </form>
    
  )
}
