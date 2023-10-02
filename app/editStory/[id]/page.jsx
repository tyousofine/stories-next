import EditStoryForm from "@/components/EditStoryForm";


const getStoryById = async(id) => {
  const apiUrl = process.env.API_URL
  try {
    const res = await fetch(`${apiUrl}/api/stories/${id}`, {
      cache: "no-store"
    })

    if(!res.ok) {
      throw new Error("Failed to fetch story")
    }
    
    return res.json()
  } catch (error) {
    console.log("Failed to get story.", error)
  }
}

export default async function EditStory({params}) {
 const {id} = params;

  const story  = await getStoryById(id);
 
  const {title, detail} = story

  return (
    <EditStoryForm id={id} title={title} detail={detail}/>
  )
}
