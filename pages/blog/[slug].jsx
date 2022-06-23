import { faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, getDocs, query, where } from 'firebase/firestore'
import moment from 'moment'
import { Image, Splash } from '../../components'
import { db } from '../../firebase-config'
import { POSTS } from '../../utils/constants'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Post = () => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { slug } = router.query

  const getPost = async () => {
    setLoading(true)
    const q = query(collection(db, POSTS), where('slug', '==', slug))
    const querySnapshot = await getDocs(q)
    setPost(querySnapshot.docs[0].data())
    setLoading(false)
  }

  useEffect(() => {
    if (slug) {
      getPost()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  return loading ? (
    <Splash />
  ) : (
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

export default Post
