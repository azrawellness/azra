import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { Header, Image } from '../components'
import { storage } from '../firebase-config'

const ClientReviews = ({ clientReviews }) => {
  return (
    <div className="bg-gray text-black">
      <Header title="Client Reviews" />
      <div className="container mx-auto py-16">
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
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const storageRef = ref(storage, 'client-reviews')
  let clientReviews = []

  await listAll(storageRef)
    .then((result) => {
      return Promise.all(
        result.items.map((imageRef) => getDownloadURL(imageRef))
      )
    })
    .then((res) => {
      clientReviews = res
    })
  return { props: { clientReviews } }
}

export default ClientReviews
