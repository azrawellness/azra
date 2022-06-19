import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { Header, Image } from '../components'
import { storage } from '../firebase-config'

const ClientReviews = ({ clientReviews }) => {
  return (
    <div className="bg-gray text-black">
      <Header title="Client Reviews" />
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 relative lg:grid-cols-3 gap-4 w-full px-4 lg:px-0">
          {clientReviews &&
            clientReviews.map((clientReview, index) => (
              <Image
                key={index}
                width={500}
                imageClass="bg-white p-10"
                height={500}
                src={clientReview}
                alt={`Client Review image`}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
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
