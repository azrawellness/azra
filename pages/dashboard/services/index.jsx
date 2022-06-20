import {
  collection,
  getDocs,
  orderBy,
  query,
  startAfter,
  limit,
} from 'firebase/firestore'
import Link from 'next/link'
import { db } from '../../../firebase-config'
import { SERVICES } from '../../../utils/constants'

const Services = ({ services }) => {
  return (
    <div>
      <div className="text-2xl mb-4">Services</div>
      <div className="bg-white rounded shadow container mx-auto p-2">
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{service.title}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const q = query(collection(db, SERVICES), limit(10))
  const querySnapshot = await getDocs(q)

  const services = []
  querySnapshot.forEach((doc) => {
    console.log(doc)
    services.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  return {
    props: { services },
  }
}

export default Services
