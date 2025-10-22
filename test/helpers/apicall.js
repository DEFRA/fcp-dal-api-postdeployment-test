import axios from 'axios'

const gqlUrl =
  'https://fcp-dal-api.' +
  process.env.ENVIRONMENT +
  // 'dev' +
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
      timeout: 30000,
      headers: {
        Email: 'test.user01@defra.gov.uk',
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + process.env.AUTH_TOKEN
      }
    }
  )

  return apiResult
}
