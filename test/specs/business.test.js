import {
  getGetBusinessDetailsGqlQuery,
  getToggleBusinessLockGqlQuery,
  getGetMessagesGqlQuery,
  getGetAuthorisationsGqlQuery,
  getGetAuthenticateQuestionsGqlQuery,
  getGetCustomerDetailsGqlQuery,
  getGetCphGqlQuery,
  getGetLandParcelsGqlQuery,
  getGetLandCoverSummaryGqlQuery,
  getGetLandCoversGqlQuery,
  getGetAgreementsGqlQuery,
  getGetApplicationsGqlQuery,
  getCreateBusinessGqlMutation,
  getUpdateBusinessNameGqlMutation,
  getUpdatePersonGqlMutation,
  getGetBusinessesCustomersGqlQuery,
  getGetCustomerBusinessesGqlQuery
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

describe('Get CPH details', () => {
  it('CPH details should be returned OK', async () => {
    const jqlVars = '{ "sbi": "114301879"}'

    const businessQuery = getGetCphGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get land parcel details', () => {
  it('Land parcel details should be returned OK', async () => {
    const jqlVars = '{ "sbi": "114301879"}'

    const businessQuery = getGetLandParcelsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get Land Cover Summary details', () => {
  it('Land cover summary details should be returned OK', async () => {
    const jqlVars = '{ "sbi": "114301879"}'

    const businessQuery = getGetLandCoverSummaryGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get Land Covers', () => {
  it('Land covers should be returned OK', async () => {
    const jqlVars = '{"sbi":"1111111111","sheetId":"SS6627","parcelId":"5662"}'

    const businessQuery = getGetLandCoversGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get Agreements', () => {
  it('Agreements should be returned OK', async () => {
    const jqlVars = '{ "sbi": "114301879"}'

    const businessQuery = getGetAgreementsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get Applications', () => {
  it('Applications should be returned OK', async () => {
    const jqlVars = '{ "sbi": "114301879"}'

    const businessQuery = getGetApplicationsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Create business', () => {
  it('A new business can be created', async () => {
    const businessQuery = getCreateBusinessGqlMutation()
    const res = await makePostCall(businessQuery)
    expect(res.status).to.equal(200)
  })
})

describe('Update business name', () => {
  it('An existing businesses name can be updated', async () => {
    const businessQuery = getUpdateBusinessNameGqlMutation()
    const res = await makePostCall(businessQuery)
    expect(res.status).to.equal(200)
  })
})

describe('Update Person', () => {
  it('An existing person can be updated', async () => {
    const businessQuery = getUpdatePersonGqlMutation()
    const res = await makePostCall(businessQuery)
    expect(res.status).to.equal(200)
  })
})

describe('Get businesses customers', () => {
  it('Businesses customers should be returned OK', async () => {
    const jqlVars = '{ "sbi": "114301879"}'

    const businessQuery = getGetBusinessesCustomersGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get Customers businesses', () => {
  it('Customers businesses should be returned OK', async () => {
    const jqlVars = '{ "crn": "1111111100" }'

    const businessQuery = getGetCustomerBusinessesGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})
