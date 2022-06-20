import { faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, getDocs, query, where } from 'firebase/firestore'
import moment from 'moment'
import { Image } from '../../components'
import { db } from '../../firebase-config'
import { POSTS } from '../../utils/constants'

const Post = ({ post }) => {
  return (
    <div className="bg-gray text-black py-16 px-4 lg:px-0">
      <div className="container mx-auto">
        {post && (
          <div className="bg-white rounded shadow w-full max-w-5xl mx-auto mb-4">
            {post.featuredImage?.url && (
              <div className="relative rounded-t w-full h-48 lg:h-128">
                <Image
                  layout="fill"
                  objectFit="cover"
                  imageClass="rounded-t"
                  src={post?.featuredImage?.url}
                  alt={post.title}
                />
              </div>
            )}
            <div className="p-8">
              {/* Post Details */}
              <div className="text-2xl lg:text-4xl font-title mb-4">
                {post.title}
              </div>
              <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-3 mb-10">
                <div>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    fixedWidth
                    className="text-primary"
                  />
                  <span>
                    {moment
                      .unix(post.publishedDate.seconds)
                      .format('Do MMM YYYY')}
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faUser}
                    fixedWidth
                    className="text-primary"
                  />
                  <span>{post.author?.displayName}</span>
                </div>
                <div>
                  {post.categories &&
                    post.categories.map((category, index) => (
                      <span
                        key={index}
                        className="bg-primary text-white px-2 py-1 rounded"
                      >
                        {category.name}
                      </span>
                    ))}
                </div>
              </div>

              {/* Post Content */}
              <div
                className="lg:text-lg my-10"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { params } = context
  let post = null
  const q = query(collection(db, POSTS), where('slug', '==', params.slug))
  const querySnapshot = await getDocs(q)
  post = querySnapshot.docs[0].data()

  return { props: { post: JSON.parse(JSON.stringify(post)) } }
}

export default Post
