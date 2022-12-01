import { useEffect, useRef, useState } from 'react'
import {
  ref,
  listAll,
  getDownloadURL,
  uploadBytesResumable,
} from 'firebase/storage'
import { storage } from '../../firebase-config'
import DataTable from 'react-data-table-component'
import { Splash } from '../../components'
import Image from 'next/image'
// import moment from 'moment'
import Link from 'next/link'
import { toast } from 'react-toastify'

const Media = () => {
  const columns = [
    {
      name: 'Name',
      cell: (row) => (
        <button onClick={() => copyToClipboard(row.name)}>{row.name}</button>
      ),
    },
    {
      name: 'URL',
      cell: (row) => (
        <button
          className="bg-primary text-white px-2 py-1 rounded"
          onClick={() => copyToClipboard(row.url)}
        >
          Copy URL
        </button>
      ),
    },
    {
      name: 'Image',
      selector: (row) => (
        <Image
          width={40}
          height={40}
          objectFit="cover"
          src={row.url}
          alt={row.name}
        />
      ),
    },
    {
      name: 'Actions',
      right: true,
      cell: (row) => (
        <button
          onClick={() => deleteImage(row.name)}
          className="bg-red text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      ),
    },
  ]

  const [loading, setLoading] = useState(false)
  const [allFiles, setAllFiles] = useState([])
  const fileRef = useRef(null)
  const [progressPercent, setProgressPercent] = useState(0)

  const handleUpload = async (e) => {
    const file = e.target?.files[0]
    if (!file) return
    const storageRef = ref(storage, `uploads/${file.name}`)
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
        fileRef.current.value = null
        setProgressPercent(0)
        getAllFiles()
      }
    )
  }

  const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content)
    toast.success('Copied to Clipboard!!')
  }

  const getAllFiles = async () => {
    setLoading(true)
    setAllFiles([])
    const listRef = ref(storage, 'uploads')

    // Find all the prefixes and items.
    await listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(ref(storage, itemRef)).then((fileURL) => {
            setAllFiles((prevState) => [
              ...prevState,
              { name: itemRef.name, url: fileURL },
            ])
          })
        })
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        // Uh-oh, an error occurred!
      })
  }

  useEffect(() => {
    getAllFiles()

    return () => setAllFiles([])
  }, [])

  if (loading) return <Splash />

  return (
    <div className="my-10 space-y-2">
      <div className="items-center flex justify-between mb-4">
        <div className="text-2xl">Media</div>
        <div className="bg-white p-2 rounded shadow">
          <input
            onInput={(e) => handleUpload(e)}
            type="file"
            ref={fileRef}
            className="mb-4"
            accept="image/*"
          />
          <progress
            id="file"
            value={progressPercent}
            max="100"
          >
            {progressPercent}%
          </progress>
        </div>
      </div>
      <div className="bg-white rounded shadow w-full">
        <DataTable
          columns={columns}
          data={allFiles}
        />
      </div>
    </div>
  )
}

export default Media
