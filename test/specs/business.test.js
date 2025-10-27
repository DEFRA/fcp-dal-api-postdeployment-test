import {
  getGetBusinessDetailsGqlQuery,
  getToggleBusinessLockGqlQuery
} from '../helpers/graphqlqueries.js'
import { makePostCall } from '../helpers/apicall.js'
import { expect } from 'chai'

describe('Get business details', () => {
  it('Business details should be returned OK', async () => {
    const jqlVars = '{ "sbi": "114301879"}'

    const businessQuery = getGetBusinessDetailsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Toggle business lock', () => {
  it('Toggling the business lock return 200', async () => {
    const jqlVars = '{ "input": { "sbi": "112943154", "reason": "test" } }'

    const businessQuery = getToggleBusinessLockGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})
