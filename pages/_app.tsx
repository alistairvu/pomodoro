import "../styles/globals.css"
import "../styles/bootstrap.min.css"
import { AppProps } from "next/app"
import { Provider } from "jotai"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
