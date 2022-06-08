import "../styles/globals.css"
import { Provider } from "../components/Context.js"

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
