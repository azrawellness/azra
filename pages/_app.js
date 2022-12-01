import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthLayout, DashboardLayout, Layout } from '../components'
import { AuthContextProvider } from '../context/AuthContext'
import '../styles/globals.css'

config.autoAddCss = false
library.add(fas)

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/dashboard')) {
    return (
      <AuthContextProvider>
        <DashboardLayout>
          <NextNProgress color="#99c300" />
          <Component {...pageProps} />
          <ToastContainer
            theme="colored"
            autoClose={1000}
          />
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
