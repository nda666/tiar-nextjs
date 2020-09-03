import '../styles/globals.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import UserProvider from "../providers/users-provider";

function MyApp({ Component, pageProps }) {
  return (
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
  )
}

export default MyApp
