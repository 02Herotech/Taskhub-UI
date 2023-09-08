import '@/styles/globals.css'
import Layout from '../../components/layout/Layout'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  variable: "--Poppins",
  subsets: ["latin"],
  display: "swap",
  weight: "400"
})

const montserrat = Montserrat({subsets: ["latin"]})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={poppins.className}>
        <Component {...pageProps} />

      </main>
    </Layout>
  )
}
