const axios = require('axios')

const gqlUrl =
  'https://fcp-dal-api.' +
  process.env.ENVIRONMENT +
  '.cdp-int.defra.cloud$/graphql'
const config = {
  headers: {
    Email: 'test.user01@defra.gov.uk',
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + process.env.AUTH_TOKEN
  }
}

export async function makePostCall(gqlQueryString) {
  return axios.post({
    url: gqlUrl,
    data: {
      query: gqlQueryString
    },
    config
  })
}
