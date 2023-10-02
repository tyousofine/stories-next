'use client'
import { useRouter } from 'next/navigation'

import {HiOutlineTrash} from 'react-icons/hi'


export default function RemoveBtn({id}) {
  const router = useRouter();
  
  const deleteStory = async () => {
    const confirmed = confirm('Are you sure?')
  
    if (confirmed) {
      await fetch(`http://localhost:3000/api/stories?id=${id}`, {
        method: "DELETE",
      })
      router.refresh()
    }
  }

  return (
    <button onClick={deleteStory}>
        <HiOutlineTrash  size={24} color='red'/>
    </button>
  )
}
