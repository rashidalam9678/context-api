import '../styles/globals.css'
import AppStore from '../context/user'

function MyApp({ Component, pageProps }) {
  return (

    // Wrapping our app in AppStore
    <AppStore>
      <Component {...pageProps} />
    </AppStore>
  )
}

export default MyApp
