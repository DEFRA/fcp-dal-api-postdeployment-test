import axios from 'axios'

// API_URL overrides the in-platform host, e.g. when running locally:
// API_URL=https://fcp-dal-api.api.dev.cdp-int.defra.cloud/graphql
const gqlUrl =
  process.env.API_URL ||
  'https://fcp-dal-api.' +
    process.env.ENVIRONMENT +
    '.cdp-int.defra.cloud/graphql'

export async function makePostCall(
  gqlQueryString,
  gqlVariablesJsonString = '{}'
) {
  const apiResult = await axios.post(
    gqlUrl,
    {
      query: gqlQueryString,
      variables: JSON.parse(gqlVariablesJsonString)
    },
    {
      returnRejectedPromiseOnError: true,
      timeout: 600000,
      headers: {
        Email: 'TestUser01@defra.gov.uk',
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + process.env.AUTH_TOKEN
      }
    }
  )

  return apiResult
}
