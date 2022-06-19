import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.css'
import { AuthContextProvider } from '../context/AuthContext'
import { Layout, DashboardLayout, AuthLayout } from '../components'

config.autoAddCss = false
library.add(fas)

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/dashboard')) {
    return (
      <AuthContextProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </AuthContextProvider>
    )
  } else if (router.pathname === '/login' || router.pathname === '/register') {
    return (
      <AuthContextProvider>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </AuthContextProvider>
    )
  } else {
    return (
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    )
  }
}

export default MyApp
