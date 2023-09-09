import '@/styles/globals.css'
import Layout from '../../components/layout/Layout'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

const poppins = Poppins({
  variable: "--Poppins",
  subsets: ["latin"],
  display: "swap",
  weight: "400"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider store={store}>
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
      </Provider>
    </Layout>
  )
}
