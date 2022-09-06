import { useState } from 'react'
import DataTable from 'react-data-table-component'

const Tags = () => {
  const [loading, setLoading] = useState(false)
  const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
    },
    {
      name: 'Year',
      selector: (row) => row.year,
    },
  ]

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]

  return (
    <div className="text-2xl mb-4">
      Services
      <div className="bg-white rounded shadow container mx-auto p-2">
        <DataTable
          columns={columns}
          pagination
          data={data}
          progressPending={loading}
        />
      </div>
    </div>
  )
}

export default Tags
