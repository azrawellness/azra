import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
} from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { TagDialog, Splash } from '../../components'
import { db } from '../../firebase-config'
import { TAGS } from '../../utils/constants'
import { toast } from 'react-toastify'

const Tags = () => {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [tags, setTags] = useState([])
  const [tag, setTag] = useState({
    id: '',
    name: '',
    slug: '',
  })

  const columns = [
    {
      name: 'Name',
      cell: (row) => row.name,
      grow: 1,
    },
    {
      name: 'Slug',
      selector: (row) => row.slug,
      grow: 1,
    },
    {
      name: 'Actions',
      right: true,
      cell: (row) => (
        <div className="space-x-2">
          <button
            onClick={() => editTag(row)}
            className="bg-green text-white px-4 py-2 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTag(row.id)}
            className="bg-red text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      ),
    },
  ]

  const createTag = () => {
    setTag({
      id: '',
      name: '',
      slug: '',
      status: true,
    })
    setShow(true)
  }

  const editTag = (row) => {
    setTag(row)
    setShow(true)
  }

  const processTag = async () => {
    if (tag.name.length === 0) {
      toast.error('Title cannot be empty')
      return
    }

    if (tag.slug.length === 0) {
      toast.error('Slug cannot be empty')
      return
    }

    if (tag.id) {
      const docRef = doc(db, 'tags', tag.id)

      await setDoc(docRef, tag)
        .then(() => {
          toast.success('Tag Updated Successfully!!')
          setShow(false)
        })
        .catch((err) => {
          toast.error(err)
        })
    } else {
      await addDoc(collection(db, 'tags'), tag)
        .then(() => {
          toast.success('Tag Created Successfully!!')
          setShow(false)
        })
        .catch((err) => {
          toast.error(err)
        })
    }
  }

  const getTags = async () => {
    try {
      setLoading(true)
      const q = query(collection(db, TAGS))
      const querySnapshot = await getDocs(q)

      const tags = []
      querySnapshot.forEach((doc) => {
        console.log(doc)
        tags.push({
          ...doc.data(),
          id: doc.id,
        })
      })
      setLoading(false)
      setTags(tags)
    } catch (error) {
      setLoading(false)
    }
  }

  const deleteTag = async (id) => {
    await toast.promise(deleteDoc(doc(db, 'tags', id)), {
      pending: 'Deleting Tag...',
      success: 'Tag Deleted Successfully',
      error: 'Error While Deleting Tag',
    })
    await getTags()
  }

  useEffect(() => {
    getTags()
  }, [])

  if (loading) return <Splash />

  if (tags)
    return (
      <div className="my-10">
        <div className="items-center flex justify-between mb-4">
          <div className="text-2xl">Tags</div>
          <button
            onClick={createTag}
            className="bg-primary text-white px-8 py-2 rounded hover:shadow transition"
          >
            New
          </button>
        </div>
        <div className="bg-white rounded shadow w-full">
          <DataTable
            columns={columns}
            pagination
            data={tags}
            progressPending={loading}
          />
        </div>
        <TagDialog
          show={show}
          title={tag.id ? 'Update Tag' : 'Create Tag'}
          setShow={setShow}
          tag={tag}
          setTag={setTag}
          processTag={processTag}
        />
      </div>
    )
}

export default Tags
