import React from 'react'
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { DataProvider } from 'hooks/useDataProvider'
import { onError } from '@apollo/client/link/error'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    new HttpLink({
      uri: 'https://api.spacex.land/graphql',
    }),
    onError(({ graphQLErrors, networkError }) => {
      if (networkError) {
        console.log(`[Network error]: ${networkError}`)
      }

      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      }
    }),
  ]),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </ApolloProvider>
  )
}

export default MyApp
