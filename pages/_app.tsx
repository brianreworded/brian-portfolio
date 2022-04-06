import type { AppProps } from "next/app"
import '../styles/globals.css'
import { ThemeProvider } from "next-themes"
import { Layout } from "./components/layout"
import Head from "next/head"




function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className="bg-th-background text-th-primary-dark">
      <ThemeProvider>
        <Layout>
      <Head>
        <title>Brian Swanberg</title>
        <meta name="description" content="Using AI to help improve quality of life" />
        <link rel="icon" href="/brian-photo.ico" />
      </Head>
      <Component {...pageProps} />
      
      </Layout>
      </ThemeProvider>
      </div>

  )
}

export default MyApp
