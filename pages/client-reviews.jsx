import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { Header, Image, Splash } from '../components'
import { storage } from '../firebase-config'
import { useState, useEffect } from 'react'
import EnquiryForm from '../components/EnquiryForm'

const ClientReviews = () => {
  const [clientReviews, setClientReviews] = useState([])
  const [loading, setLoading] = useState(false)

  const getClientReviews = async () => {
    setLoading(true)
    const storageRef = ref(storage, 'client-reviews')

    await listAll(storageRef)
      .then((result) => {
        return Promise.all(
          result.items.map((imageRef) => getDownloadURL(imageRef))
        )
      })
      .then((res) => {
        setClientReviews(res)
        setLoading(false)
      })
  }

  useEffect(() => {
    getClientReviews()
  }, [])

  return (
    <div className="bg-gray text-black">
      <Header title="Client Reviews" />
      <div className="container mx-auto ">
        {loading ? (
          <Splash />
        ) : (
          <div className="grid grid-cols-1 relative lg:grid-cols-3 gap-8 w-full px-4 lg:px-0">
            {clientReviews &&
              clientReviews.map((clientReview, index) => (
                <div key={index} className="relative shadow">
                  <Image
                    width={500}
                    layout="responsive"
                    height={500}
                    src={clientReview}
                    alt={`Client Review image`}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="w-full flex justify-center mt-[-1rem] ">
        <EnquiryForm />
      </div>
    </div>
  )
}

export default ClientReviews
