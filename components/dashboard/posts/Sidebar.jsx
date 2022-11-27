import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Disclosure } from '@headlessui/react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useRef, useState } from 'react'
import { Image } from '../../../components'
import { storage } from '../../../firebase-config'

const Sidebar = ({
  post,
  tags,
  categories,
  users,
  postUpdated,
  featuredImage,
  removeFeaturedImage,
  updateFeaturedImage,
}) => {
  const [imgUrl, setImgUrl] = useState(null)
  const [author, setAuthor] = useState(null)
  const [excerpt, setExcerpt] = useState(null)
  const fileRef = useRef(null)
  const [progressPercent, setProgressPercent] = useState(0)

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
        setProgressPercent(progress)
      },
      (error) => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          updateFeaturedImage(file.name, downloadURL)
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
                <label
                  htmlFor="status"
                  className="text-xs"
                >
                  Status
                </label>
                <select
                  name="status"
                  id="status"
                  value={post?.status}
                  onChange={(e) => postUpdated(e)}
                  className="w-full bg-white border border-gray-dark rounded p-2"
                >
                  <option
                    data-value="publish"
                    value="publish"
                  >
                    Published
                  </option>
                  <option
                    data-value="draft"
                    value="draft"
                  >
                    Draft
                  </option>
                </select>
              </div>
              {/* Author */}
              <div className="mb-4">
                <label
                  htmlFor="author"
                  className="text-xs"
                >
                  Author
                </label>
                <select
                  name="author"
                  id="author"
                  onChange={(e) => postUpdated(e)}
                  className="w-full bg-white border border-gray-dark rounded p-2"
                >
                  {users &&
                    users.map((user, index) => (
                      <option
                        key={index}
                        data-value={user}
                        value={user.email}
                      >
                        {user.displayName}
                      </option>
                    ))}
                </select>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure
        as="div"
        className="mt-2"
      >
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
              <div className="p-2 flex justify-between w-full">
                <label
                  htmlFor="categories"
                  className="text-sm"
                >
                  Health Management
                </label>
                <input
                  type="checkbox"
                  name="categories"
                  id="categories"
                  className="ml-4 h-4 w-4"
                />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure
        as="div"
        className="mt-2"
      >
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
              <div className="p-2 flex justify-between w-full">
                <label
                  htmlFor="categories"
                  className="text-sm"
                >
                  Health Management
                </label>
                <input
                  type="checkbox"
                  name="categories"
                  id="categories"
                  className="ml-4 h-4 w-4"
                />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure
        as="div"
        className="mt-2"
      >
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
                value={post?.excerpt}
                onChange={(e) => postUpdated(e)}
                className="border p-2 border-gray-dark w-full"
                name="excerpt"
                id="excerpt"
                rows="4"
              ></textarea>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure
        as="div"
        className="mt-2"
      >
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
              {featuredImage && featuredImage.fileName && (
                <div>
                  <div className="relative w-full h-48">
                    <Image
                      src={featuredImage.url}
                      alt={featuredImage.fileName}
                      layout="fill"
                    />
                  </div>
                  <button
                    onClick={removeFeaturedImage}
                    className="bg-primary px-4 py-2 rounded text-white mt-4 w-full"
                  >
                    Remove
                  </button>
                </div>
              )}
              {featuredImage?.fileName === null && (
                <div className="form p-2">
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
                    <progress
                      id="file"
                      value={progressPercent}
                      max="100"
                    >
                      {progressPercent}%
                    </progress>
                  )}
                  {imgUrl && (
                    <>
                      <div className="relative w-full">
                        <Image
                          src={imgUrl}
                          alt="uploaded file"
                          layout="fill"
                        />
                      </div>
                    </>
                  )}
                </div>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}

export default Sidebar
