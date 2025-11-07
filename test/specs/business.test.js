import {
  getGetBusinessDetailsGqlQuery,
  getToggleBusinessLockGqlQuery,
  getGetMessagesGqlQuery,
  getGetAuthorisationsGqlQuery,
  getGetAuthenticateQuestionsGqlQuery,
  getGetCustomerDetailsGqlQuery
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

describe('Get business messages', () => {
  it('Business messages should be returned OK', async () => {
    const jqlVars = '{ "sbi": "1000000000", "crn": "1111111100" }'

    const businessQuery = getGetMessagesGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get business customer authorisations', () => {
  it('Authorisations should be returned OK', async () => {
    const jqlVars = '{ "sbi": "1000000000", "crn": "1111111100" }'

    const businessQuery = getGetAuthorisationsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get customer authenticate questions', () => {
  it('Authenticate questions should be returned OK', async () => {
    const jqlVars = '{ "crn": "1111111100" }'

    const businessQuery = getGetAuthenticateQuestionsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get customer details', () => {
  it('Customer details should be returned OK', async () => {
    const jqlVars = '{ "crn": "1111111100" }'

    const businessQuery = getGetCustomerDetailsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})
