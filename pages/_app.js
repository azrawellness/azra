import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.css'
import { AuthContextProvider } from '../context/AuthContext'
import { Layout } from '../components'

config.autoAddCss = false
library.add(fas)

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/dashboard')) {
    return (
      <AuthContextProvider>
        <Component {...pageProps} />
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
