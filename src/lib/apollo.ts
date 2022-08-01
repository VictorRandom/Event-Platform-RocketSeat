import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl6asct630dwy01t4fejngqr1/master',
    cache: new InMemoryCache()
})