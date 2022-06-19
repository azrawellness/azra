export const TESTIMONIALS = 'testimonials'
export const POSTS = 'posts'

export const NAVBAR_LINKS = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/services',
    name: 'Services',
  },
  {
    href: '/blog',
    name: 'Blog',
  },
  {
    href: '/client-reviews',
    name: 'Client Reviews',
  },
  {
    href: '/contact-us',
    name: 'Contact Us',
  },
]

export const SIDEBAR_LINKS = [
  {
    id: 1,
    href: '/dashboard',
    name: 'Dashboard',
    icon: 'fa fa-home',
    nested: false,
  },
  {
    id: 2,
    href: '/dashboard/posts',
    name: 'Posts',
    icon: 'fa fa-newspaper',
    nested: true,
  },
  {
    id: 3,
    href: '/dashboard/services',
    name: 'Services',
    icon: 'fa fa-list-check',
    nested: true,
  },
  {
    id: 4,
    href: '/dashboard/client-reviews',
    name: 'Client Reviews',
    icon: 'fa fa-star',
    nested: true,
  },
  {
    id: 5,
    href: '/dashboard/categories',
    name: 'Categories',
    icon: 'fa fa-folder-tree',
    nested: true,
  },
  {
    id: 6,
    href: '/dashboard/tags',
    name: 'Tags',
    icon: 'fa fa-hashtag',
    nested: true,
  },
  {
    id: 7,
    href: '/dashboard/testimonials',
    name: 'Testimonials',
    icon: 'fa fa-comment',
    nested: true,
  },
  {
    id: 8,
    href: '/dashboard/users',
    name: 'Users',
    icon: 'fa fa-person',
    nested: true,
  },
  {
    id: 8,
    href: '/dashboard/settings',
    name: 'Settings',
    icon: 'fa fa-gear',
    nested: false,
  },
]
