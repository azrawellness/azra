import dynamic from 'next/dynamic'

export const Splash = dynamic(() => import('./Splash'))
export const ContactForm = dynamic(() => import('./ContactForm'))
export const Footer = dynamic(() => import('./Footer'))
export const Layout = dynamic(() => import('./layout'))
export const VideoModal = dynamic(() => import('./VideoModal'))
export const DashboardLayout = dynamic(() => import('./dashboard-layout'))
export const AuthLayout = dynamic(() => import('./auth-layout'))
export const TopNavbar = dynamic(() => import('./TopNavbar'))
export const Navbar = dynamic(() => import('./Navbar'))
export const Header = dynamic(() => import('./Header'))
export const Image = dynamic(() => import('./Image'))
export const ServiceCard = dynamic(() => import('./ServiceCard'))
export const FeatureCard = dynamic(() => import('./FeatureCard'))
export const SwiperSection = dynamic(() => import('./SwiperSection'))
export const Dash = dynamic(() => import('./Dash'))
export const WhatsAppButton = dynamic(() => import('./WhatsAppButton'))
export const Services = dynamic(() => import('./Services/Services'))
export const FeatureSection = dynamic(() => import('./FeatureSection'))
export const PostCard = dynamic(() => import('./PostCard'))

// Home components
export const AboutAzra = dynamic(() => import('./home/AboutAzra'))
export const ImageSlider = dynamic(() => import('./home/ImageSlider'))
export const WhyChoseUs = dynamic(() => import('./home/WhyChoseUs'))
export const PricingAndPlans = dynamic(() => import('./home/PricingAndPlans'))
export const Testimonials = dynamic(() => import('./home/Testimonials'))
export const PostSlider = dynamic(() => import('./home/PostSlider'))
export const PostsSection = dynamic(() => import('./home/PostsSection'))
export const Sidebar = dynamic(() => import('./dashboard/Sidebar'))
export const MyEditor = dynamic(() => import('./dashboard/Editor'))

// Dashboard Components
export const PostSidebar = dynamic(() => import('./dashboard/posts/Sidebar'))
export const ServiceSidebar = dynamic(() =>
  import('./dashboard/services/Sidebar')
)
export const CategoryDialog = dynamic(() =>
  import('./dashboard/CategoryDialog')
)
export const TagDialog = dynamic(() => import('./dashboard/TagDialog'))
