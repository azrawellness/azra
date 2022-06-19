import { useRef, useState } from 'react'
import { Image, MyEditor } from '../../../components'
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  collection,
  setDoc,
} from 'firebase/storage'
import { storage, db } from '../../../firebase-config'
import { POSTS } from '../../../utils/constants'

const NewPost = () => {
  const [imgUrl, setImgUrl] = useState(null)
  const [author, setAuthor] = useState(null)
  const [title, setTitle] = useState(null)
  const [content, setContent] = useState(null)
  const [excerpt, setExcerpt] = useState(null)
  const fileRef = useRef(null)
  const [progresspercent, setProgresspercent] = useState(0)

  const removeImage = () => {}

  const addPost = async () => {
    await setDoc(doc(db, POSTS), {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    })
  }

  const handleUpload = async (e) => {
    const file = e.target?.files[0]
    if (!file) return
    const storageRef = ref(storage, `posts/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    await uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgresspercent(progress)
      },
      (error) => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
          fileRef.current.value = null
        })
      }
    )
  }

  return (
    <>
      <div className="bg-white p-2 rounded shadow mb-4">
        <div className="w-full flex-col">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            placeholder="Title"
            className="w-full p-2 font-title text-2xl border-gray-dark border rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9 bg-white p-2 rounded shadow">
          <MyEditor content={content} />
        </div>
        <div className="col-span-3 bg-white p-2 rounded shadow">
          {/* Buttons */}
          <div className="flex space-x-2 mb-4">
            <button className="w-1/2 px-2 py-1 rounded bg-primary text-white shadow">
              Publish
            </button>
            <button className="w-1/2 px-2 py-1 rounded bg-black text-white shadow">
              Save Draft
            </button>
          </div>
          {/* Status */}
          <div className="mb-4">
            <label htmlFor="status" className="text-sm">
              Status
            </label>
            <select
              name="status"
              id="status"
              className="w-full bg-white border border-gray-dark rounded p-2"
            >
              <option value="true">Published</option>
              <option value="false">Draft</option>
            </select>
          </div>
          {/* Author */}
          <div className="mb-4">
            <label htmlFor="author" className="text-sm">
              Author
            </label>
            <select
              name="author"
              id="author"
              className="w-full bg-white border border-gray-dark rounded p-2"
            >
              <option value="surpawan@gmail.com">Pawan Kumar</option>
            </select>
          </div>
          {/* Categories */}
          <div className="mb-4">
            <label htmlFor="categories" className="text-sm">
              Categories
            </label>
            <div className="p-2 border border-gray-dark w-full">
              <label htmlFor="categories" className="text-sm">
                Health Management
                <input
                  type="checkbox"
                  name="categories"
                  id="categories"
                  className="ml-4 h-4 w-4"
                />
              </label>
            </div>
          </div>
          {/* Tags */}
          <div className="mb-4">
            <label htmlFor="categories" className="text-sm">
              Tags
            </label>
            <div className="p-2 border border-gray-dark w-full">
              <label htmlFor="categories" className="text-sm">
                Health Management
                <input
                  type="checkbox"
                  name="categories"
                  id="categories"
                  className="ml-4 h-4 w-4"
                />
              </label>
            </div>
          </div>
          {/* Excerpt */}
          <div className="mb-4">
            <label htmlFor="excerpt" className="text-sm">
              Excerpt
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="border p-2 border-gray-dark w-full"
              name="excerpt"
              id="excerpt"
              rows="4"
            ></textarea>
          </div>
          {/* Featured Image */}
          <div className="">
            <div className="text-sm">Featured Image</div>
            <div className="form border border-gray-dark p-2">
              {!imgUrl && (
                <input
                  onInput={(e) => handleUpload(e)}
                  type="file"
                  ref={fileRef}
                  className="mb-4"
                  accept="image/*"
                />
              )}
              {!imgUrl && (
                <progress id="file" value={progresspercent} max="100">
                  {progresspercent}%
                </progress>
              )}
              {imgUrl && (
                <>
                  <div className="relative w-full">
                    <Image
                      src={imgUrl}
                      alt="uploaded file"
                      width={200}
                      height={200}
                    />
                  </div>
                  <button
                    onClick={removeImage}
                    className="text-sm bg-red px-2 py-1 rounded shadow"
                  >
                    Remove Image
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewPost
