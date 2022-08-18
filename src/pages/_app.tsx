import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react"
import Layout from "../components/layouts/main"
import Fonts from "../components/fonts"
import theme from '../lib/theme'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
  // ↓provider でthemeを囲うことでグローバルに反映
  <ChakraProvider theme={theme}>
    <Layout router={router}>
      <Fonts />
      <Component {...pageProps} key={router.route} />
    </Layout>
  </ChakraProvider>
  )
}

export default MyApp
