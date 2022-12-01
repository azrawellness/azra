import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { CategoryDialog, Splash } from '../../components'
import { db } from '../../firebase-config'
import { CATEGORIES } from '../../utils/constants'
import { toast } from 'react-toastify'

const Categories = () => {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState({
    id: '',
    name: '',
    slug: '',
    status: true,
  })
  const [categories, setCategories] = useState([])

  const columns = [
    {
      name: 'Name',
      cell: (row) => row.name,
      grow: 1,
    },
    {
      name: 'Slug',
      cell: (row) => row.slug,
      grow: 1,
    },
    {
      name: 'Actions',
      right: true,
      cell: (row) => (
        <div className="space-x-2">
          <button
            onClick={() => editCategory(row)}
            className="bg-green text-white px-4 py-2 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => deleteCategory(row.id)}
            className="bg-red text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      ),
    },
  ]

  const createCategory = () => {
    setCategory({
      id: '',
      name: '',
      slug: '',
      status: true,
    })
    setShow(true)
  }

  const editCategory = (row) => {
    setCategory(row)
    setShow(true)
  }

  const processCategory = async () => {
    if (category.name.length === 0) {
      toast.error('Title cannot be empty')
      return
    }

    if (category.slug.length === 0) {
      toast.error('Slug cannot be empty')
      return
    }

    if (category.id) {
      const docRef = doc(db, 'categories', category.id)

      await setDoc(docRef, category)
        .then(() => {
          toast.success('Category Updated Successfully!!')
          setShow(false)
        })
        .catch((err) => {
          toast.error(err)
        })
    } else {
      await addDoc(collection(db, 'categories'), category)
        .then(() => {
          toast.success('Category Created Successfully!!')
          setShow(false)
        })
        .catch((err) => {
          toast.error(err)
        })
    }
  }

  const getCategories = async () => {
    try {
      setLoading(true)
      const q = query(collection(db, CATEGORIES))
      const querySnapshot = await getDocs(q)

      const categories = []
      querySnapshot.forEach((doc) => {
        categories.push({
          ...doc.data(),
          id: doc.id,
        })
      })
      setLoading(false)
      setCategories(categories)
    } catch (error) {
      setLoading(false)
    }
  }

  const deleteCategory = async (id) => {
    await toast.promise(deleteDoc(doc(db, 'categories', id)), {
      pending: 'Deleting Category...',
      success: 'Category Deleted Successfully',
      error: 'Error While Deleting Category',
    })
    await getCategories()
  }

  useEffect(() => {
    getCategories()
  }, [])

  if (loading) return <Splash />

  if (categories)
    return (
      <div className="my-10 space-y-2">
        <div className="items-center flex justify-between mb-4">
          <div className="text-2xl">Categories</div>
          <button
            onClick={createCategory}
            className="bg-primary text-white px-8 py-2 rounded hover:shadow transition"
          >
            New
          </button>
        </div>
        <div className="bg-white rounded shadow w-full">
          <DataTable
            columns={columns}
            pagination
            data={categories}
            progressPending={loading}
          />
        </div>
        <CategoryDialog
          show={show}
          title={category.id ? 'Update Category' : 'Create Category'}
          setShow={setShow}
          category={category}
          setCategory={setCategory}
          processCategory={processCategory}
        />
      </div>
    )
}

export default Categories
