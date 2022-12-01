import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useRef, useState } from 'react'
import { Image } from '../../../components'
import { storage } from '../../../firebase-config'

const Sidebar = ({
  service,
  setService,
  serviceUpdated,
  featuredImage,
  removeFeaturedImage,
  updateFeaturedImage,
  thumbnail,
  removeThumbnail,
  updateThumbnail,
}) => {
  const [imgUrl, setImgUrl] = useState(null)
  const [thumbnailUrl, setThumbnailUrl] = useState(null)
  const fileRef = useRef(null)
  const thumbnailFileRef = useRef(null)
  const [progressPercent, setProgressPercent] = useState(0)
  const [thumbnailProgressPercent, setThumbnailProgressPercent] = useState(0)

  const removeImage = () => {}

  const handleFeaturedImageUpload = async (e) => {
    const file = e.target?.files[0]
    if (!file) return
    const storageRef = ref(storage, `services/${file.name}`)
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

  const handleThumbnailUpload = async (e) => {
    const file = e.target?.files[0]
    if (!file) return
    const storageRef = ref(storage, `services/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    await uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setThumbnailProgressPercent(progress)
      },
      (error) => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          updateThumbnail(file.name, downloadURL)
          setThumbnailUrl(downloadURL)
          thumbnailFileRef.current.value = null
        })
      }
    )
  }

  return (
    <>
      {/* Status */}
      <div className="mb-4">
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={service?.status}
          onChange={(e) =>
            setService((prevState) => ({
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
      {/* Description */}
      <div className="mb-4">
        <label htmlFor="excerpt">Description</label>
        <textarea
          value={service?.description}
          onChange={(e) =>
            setService((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
          className="border p-2 border-gray-dark w-full"
          name="description"
          id="description"
          rows="4"
        ></textarea>
      </div>
      {/* Featured Image */}
      <div className="mb-4 border p-1 rounded">
        <label htmlFor="featuredImage">Featured Image</label>
        {featuredImage && featuredImage.name && (
          <div>
            <div className="relative w-full h-48">
              <Image
                src={featuredImage.url}
                alt={featuredImage.name}
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
        {featuredImage?.name === null && (
          <div className="form p-2">
            {!imgUrl && (
              <input
                onInput={(e) => handleFeaturedImageUpload(e)}
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
      {/* Thumbnail */}
      <div className="mb-4 border p-1 rounded">
        <label htmlFor="featuredImage">Thumbnail</label>
        {thumbnail && thumbnail.name && (
          <div>
            <div className="relative w-full h-48">
              <Image
                src={thumbnail.url}
                alt={thumbnail.name}
                layout="fill"
              />
            </div>
            <button
              onClick={removeThumbnail}
              className="bg-primary px-4 py-2 rounded text-white mt-4 w-full"
            >
              Remove
            </button>
          </div>
        )}
        {thumbnail?.name === null && (
          <div className="form p-2">
            {!thumbnailUrl && (
              <input
                onInput={(e) => handleThumbnailUpload(e)}
                type="file"
                ref={thumbnailFileRef}
                className="mb-4"
                accept="image/*"
              />
            )}
            {!thumbnailUrl && (
              <progress
                id="file"
                value={thumbnailProgressPercent}
                max="100"
              >
                {thumbnailProgressPercent}%
              </progress>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Sidebar
