import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useRef, useState } from 'react'
import Select from 'react-select'
import { Image } from '../../../components'
import { storage } from '../../../firebase-config'

const Sidebar = ({
  post,
  tags,
  categories,
  users,
  setPost,
  postUpdated,
  featuredImage,
  removeFeaturedImage,
  updateFeaturedImage,
}) => {
  const [imgUrl, setImgUrl] = useState(null)
  const fileRef = useRef(null)
  const [progressPercent, setProgressPercent] = useState(0)
  const [selectedCategories, setSelectedCategories] = useState([])

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

  const handleCategories = (e) => {
    console.log(e, 56)
  }

  const updateAuthor = (e) => {
    const userIndex = users.findIndex((u) => u.id === e)

    if (userIndex === -1) {
      console.log('No User Found!!')
      return
    }

    const name = `${users[userIndex].firstName} ${users[userIndex].lastName}`
    setPost((prevState) => ({
      ...prevState,
      author: {
        displayName: users[userIndex].displayName,
        uid: users[userIndex].id,
        name: name.trim(),
      },
    }))
  }

  const handleTagChange = (tag) => {
    const isChecked = post.tags.some((t) => t.slug === tag.slug)

    if (isChecked) {
      setPost((prevState) => ({
        ...prevState,
        tags: prevState.tags.filter((t) => t.value !== tag.value),
      }))
    } else {
      setPost((prevState) => ({
        ...prevState,
        tags: prevState.tags.push(tag),
      }))
    }
  }

  const handleCategoryChange = (category) => {
    const isChecked = post.categories.some((t) => t.slug === category.slug)

    if (isChecked) {
      setPost((prevState) => ({
        ...prevState,
        categories: prevState.categories.filter(
          (t) => t.value !== category.value
        ),
      }))
    } else {
      setPost((prevState) => ({
        ...prevState,
        categories: prevState.categories.push(category),
      }))
    }
  }

  return (
    <>
      {/* Status */}
      <div className="mb-4">
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={post.status}
          onChange={(e) =>
            setPost((prevState) => ({
              ...prevState,
              status: e.target.value,
            }))
          }
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
        <label htmlFor="author">Author</label>
        <select
          name="author"
          id="author"
          value={post.author?.uid}
          onChange={(e) => updateAuthor(e.target.value)}
          className="w-full bg-white border border-gray-dark rounded p-2"
        >
          <option value="">Select Author</option>
          {users &&
            users.map((user, index) => (
              <option
                key={index}
                data-value={user}
                value={user.id}
              >
                {user.displayName}
              </option>
            ))}
        </select>
      </div>
      {/* Categories */}
      <div className="mb-4">
        <label htmlFor="categories">Categories</label>
        <Select
          className=""
          isMulti
          hideSelectedOptions={true}
          classNamePrefix="select"
          onChange={(e) =>
            setPost((prevValue) => ({ ...prevValue, categories: e }))
          }
          value={post.categories}
          isClearable
          name="categories"
          isSearchable
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option}
          options={categories}
        />
      </div>
      {/* Categories */}
      <div className="mb-4">
        <label htmlFor="categories">Tags</label>
        <Select
          className=""
          isMulti
          hideSelectedOptions={true}
          classNamePrefix="select"
          onChange={(e) => setPost((prevValue) => ({ ...prevValue, tags: e }))}
          value={post.tags}
          isClearable
          name="tags"
          isSearchable
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option}
          options={tags}
        />
      </div>
      {/* Excerpt */}
      <div className="mb-4">
        <label htmlFor="excerpt">Excerpt</label>
        <textarea
          value={post?.excerpt}
          onChange={(e) =>
            setPost((prevState) => ({
              ...prevState,
              excerpt: e.target.value,
            }))
          }
          className="border p-2 border-gray-dark w-full"
          name="excerpt"
          id="excerpt"
          rows="4"
        ></textarea>
      </div>
      {/* Featured Image */}
      <div className="mb-4 border p-1 rounded">
        <label htmlFor="featuredImage">Featured Image</label>
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
          </div>
        )}
      </div>
    </>
  )
}

export default Sidebar
