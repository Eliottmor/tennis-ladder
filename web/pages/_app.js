import '../styles/globals.css'
import Layout from '../components/Layout'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import PlayerContextProvider from '../playerContext'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <PlayerContextProvider>
          <Component {...pageProps} />
        </PlayerContextProvider>
      </ApolloProvider>
    </Layout>
  )
}

export default MyApp
