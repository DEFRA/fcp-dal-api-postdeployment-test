import { getGetBusinessDetailsGqlQuery } from '../helpers/graphqlqueries.js'
import { makePostCall } from '../helpers/apicall.js'
import { expect } from 'chai'

describe('GetBusinessDetails', () => {
  it('Business details should be returned OK', async () => {
    const jqlVars = '{ "sbi": "114301879"}'

    const businessQuery = getGetBusinessDetailsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})
