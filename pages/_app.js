import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.css'
import { AuthContextProvider } from '../context/AuthContext'
import { Layout, DashboardLayout, AuthLayout } from '../components'
import NextNProgress from 'nextjs-progressbar'

config.autoAddCss = false
library.add(fas)

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/dashboard')) {
    return (
      <AuthContextProvider>
        <DashboardLayout>
          <NextNProgress color="#99c300" />
          <Component {...pageProps} />
        </DashboardLayout>
      </AuthContextProvider>
    )
  } else if (
    router.pathname === '/login' ||
    router.pathname === '/register' ||
    router.pathname === '/forgot-password'
  ) {
    return (
      <AuthContextProvider>
        <AuthLayout>
          <NextNProgress color="#99c300" />
          <Component {...pageProps} />
        </AuthLayout>
      </AuthContextProvider>
    )
  } else {
    return (
      <Layout>
        <NextNProgress color="#99c300" />
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
