import Link from 'next/link'
import RemoveBtn from "./RemoveBtn";

import {HiPencilAlt} from 'react-icons/hi'

const getStories = async () => {
  const apiUrl = process.env.API_URL
  try {
    const res = await fetch(`${apiUrl}/api/stories`, {
      cache: "no-store"
    })

    if(!res.ok) {
      throw new Error('Failed to fetch stories')
    }

    return res.json()
  } catch (error) {
    console.log("Error loading stories", error)
  }
}


export default async function StoriesList() {
  const {stories} = await getStories();

  return (
    <>
    {stories.map((s) => (
      <div className='p-4 border-2 border-slate-300 my-3 flex justify-between gap-5 items-start'
      key={s._id}>
        <div>
          <h2 className='font-bold text-2xl'>{s.title}</h2>
          <div>{s.detail.slice(0, 100)}...</div>
        </div>

        <div className='flex gap-2 '>
          <RemoveBtn id={s._id}/>
          <Link href={`/editStory/${s._id}`}>
            <HiPencilAlt size={24}/>
          </Link>
        </div>
   
      </div>
   ))}     
    </>
  )
}
