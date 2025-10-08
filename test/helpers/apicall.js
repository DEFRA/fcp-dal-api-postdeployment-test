let gqlUrl = `${__ENV.BASE_URL}/graphql`;
let config = {
  headers: {
    Email: 'test.user01@defra.gov.uk',
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + process.env.AUTH_TOKEN
  }
}

async function makePostCall(gqlQueryString) {
  return axios.post({
    url: gqlUrl,
    data: {
      query: gqlQueryString
    },
    config
  })
}
