import { Image } from '../components'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const PostCard = ({ post }) => {
  return (
    <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
      <a>
        <div className="bg-white shadow rounded grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 relative h-full">
            <Image
              src={post.featuredImage.url}
              layout="responsive"
              imageClass=" rounded-t lg:rounded-l"
              width={500}
              height={500}
              objectFit="cover"
              alt={post.title}
            />
          </div>
          <div className="col-span-2 p-4">
            <div className="font-primary text-3xl font-semibold hover:text-primary cursor-pointer transition hover:underline">
              {post.title}
            </div>
            <div className="flex space-x-2 text-sm mt-2 mb-4">
              <div className="flex space-x-1 items-center">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  fixedWidth
                  className="text-primary"
                />
                <span>{moment(post.publishedDate).format('Do MMM YYYY')}</span>
              </div>
              <div>&bull;</div>
              <div className="flex space-x-1 items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  fixedWidth
                  className="text-primary"
                />
                <span>{post.author.displayName}</span>
              </div>
            </div>
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            ></div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default PostCard
