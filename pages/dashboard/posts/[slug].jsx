import { useRef, useState } from 'react'
import { MyEditor, PostSidebar } from '../../../components'

const EditPost = () => {
  const [title, setTitle] = useState(null)
  const [content, setContent] = useState(null)

  // const addPost = async () => {
  //   await setDoc(doc(db, POSTS), {
  //     name: 'Los Angeles',
  //     state: 'CA',
  //     country: 'USA',
  //   })
  // }

  return (
    <div className="md:h-screen">
      <div className="bg-white p-2 rounded shadow mb-4">
        <div className="w-full flex space-x-2">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            placeholder="Title"
            className="w-10/12 font-title text-2xl px-4 py-1 border-gray-dark border rounded"
          />
          {/* Buttons */}
          <button className="w-1/12 px-2 py-1 rounded bg-primary text-white shadow">
            Publish
          </button>
          <button className="w-1/12 px-2 py-1 rounded bg-black text-white shadow">
            Save Draft
          </button>
        </div>
      </div>
      <div className="h-full grid grid-cols-12 gap-4">
        <div className="col-span-9 h-full bg-white p-2 rounded shadow">
          <MyEditor content={content} />
        </div>
        <div className="col-span-3 bg-white p-2 rounded shadow">
          <PostSidebar />
        </div>
      </div>
    </div>
  )
}

export default EditPost
