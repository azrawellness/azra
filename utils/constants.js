export const TESTIMONIALS = 'testimonials'
export const POSTS = 'posts'
export const SERVICES = 'services'

export const NAVBAR_LINKS = [
  {
    href: '/',
    name: 'Home',
    match: false,
  },
  {
    href: '/schedule-consultation',
    name: 'Schedule Free Consultation',
    match: true,
  },
  {
    href: '/services',
    name: 'Services',
    match: true,
  },
  {
    href: '/blog',
    name: 'Blog',
    match: true,
  },
  {
    href: '/client-reviews',
    name: 'Client Reviews',
    match: false,
  },
  {
    href: '/contact-us',
    name: 'Contact Us',
    match: false,
  },
]

export const SIDEBAR_LINKS = [
  {
    id: 1,
    href: '/dashboard/posts/new',
    name: 'New Post',
    icon: 'fa fa-plus',
    nested: true,
    disabled: false,
  },
  {
    id: 2,
    href: '/dashboard/posts',
    name: 'Posts',
    icon: 'fa fa-newspaper',
    nested: true,
    disabled: false,
  },
  {
    id: 3,
    href: '/dashboard/services',
    name: 'Services',
    icon: 'fa fa-list-check',
    nested: true,
    disabled: true,
  },
  {
    id: 4,
    href: '/dashboard/client-reviews',
    name: 'Client Reviews',
    icon: 'fa fa-star',
    nested: true,
    disabled: true,
  },
  {
    id: 5,
    href: '/dashboard/categories',
    name: 'Categories',
    icon: 'fa fa-folder-tree',
    nested: false,
    disabled: true,
  },
  {
    id: 6,
    href: '/dashboard/tags',
    name: 'Tags',
    icon: 'fa fa-hashtag',
    nested: false,
    disabled: true,
  },
  {
    id: 7,
    href: '/dashboard/testimonials',
    name: 'Testimonials',
    icon: 'fa fa-comment',
    nested: false,
    disabled: true,
  },
  {
    id: 8,
    href: '/dashboard/users',
    name: 'Users',
    icon: 'fa fa-person',
    nested: false,
    disabled: true,
  },
  {
    id: 8,
    href: '/dashboard/settings',
    name: 'Settings',
    icon: 'fa fa-gear',
    nested: false,
    disabled: true,
  },
]
