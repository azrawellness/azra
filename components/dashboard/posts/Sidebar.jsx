import { useRef, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from '../../../components'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { storage, db } from '../../../firebase-config'

const Sidebar = () => {
  const [imgUrl, setImgUrl] = useState(null)
  const [author, setAuthor] = useState(null)
  const [excerpt, setExcerpt] = useState(null)
  const fileRef = useRef(null)
  const [progresspercent, setProgresspercent] = useState(0)

  const removeImage = () => {}

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
      <Disclosure as="div">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex items-center w-full justify-between ${
                open ? 'rounded-t-lg' : 'rounded-lg'
              } px-4 py-2 text-left text-sm font-medium bg-gray focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
            >
              <span>Summary</span>
              <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
            </Disclosure.Button>
            <Disclosure.Panel
              className={`${
                open ? 'rounded-b-lg' : ''
              } px-4 pt-4 pb-2 text-sm bg-gray`}
            >
              {/* Status */}
              <div className="mb-4">
                <label htmlFor="status" className="text-xs">
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
                <label htmlFor="author" className="text-xs">
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex items-center w-full justify-between ${
                open ? 'rounded-t-lg' : 'rounded-lg'
              } px-4 py-2 text-left text-sm font-medium bg-gray focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
            >
              <span>Categories</span>
              <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
            </Disclosure.Button>
            <Disclosure.Panel
              className={`${
                open ? 'rounded-b-lg' : ''
              } px-4 pt-4 pb-2 text-sm bg-gray`}
            >
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex items-center w-full justify-between ${
                open ? 'rounded-t-lg' : 'rounded-lg'
              } px-4 py-2 text-left text-sm font-medium bg-gray focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
            >
              <span>Tags</span>
              <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
            </Disclosure.Button>
            <Disclosure.Panel
              className={`${
                open ? 'rounded-b-lg' : ''
              } px-4 pt-4 pb-2 text-sm bg-gray`}
            >
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex items-center w-full justify-between ${
                open ? 'rounded-t-lg' : 'rounded-lg'
              } px-4 py-2 text-left text-sm font-medium bg-gray focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
            >
              <span>Excerpt</span>
              <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
            </Disclosure.Button>
            <Disclosure.Panel
              className={`${
                open ? 'rounded-b-lg' : ''
              } px-4 pt-4 pb-2 text-sm bg-gray`}
            >
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="border p-2 border-gray-dark w-full"
                name="excerpt"
                id="excerpt"
                rows="4"
              ></textarea>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex items-center w-full justify-between ${
                open ? 'rounded-t-lg' : 'rounded-lg'
              } px-4 py-2 text-left text-sm font-medium bg-gray focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
            >
              <span>Featured Image</span>
              <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
            </Disclosure.Button>
            <Disclosure.Panel
              className={`${
                open ? 'rounded-b-lg' : ''
              } px-4 pt-4 pb-2 text-sm bg-gray`}
            >
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}

export default Sidebar
