import store from '@/Redux/store'
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return(
    <Provider store={store}>
    <SessionProvider session={pageProps.session}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
    </Provider>
  )
}
