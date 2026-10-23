import {
  getGetAuthenticateQuestionsGqlQuery,
  getGetCustomerDetailsGqlQuery,
  getUpdatePersonGqlMutation,
  getGetCustomerBusinessesGqlQuery,
  getCustomerSearchGqlQuery,
  getIsCustomerEmailRegisteredGqlQuery,
  getUpdateCustomerEmailGqlMutation,
  getUpdateLockCustomerGqlMutation,
  getUpdateUnlockCustomerGqlMutation,
  getDeactivateCustomerGqlMutation,
  getUpdateCustomerAuthenticationQuestionsGqlMutation
} from '../helpers/graphqlqueries.js'
import { getCrn } from '../helpers/getdata.js'
import { makePostCall } from '../helpers/apicall.js'
import { expect } from 'chai'

describe('Get customer authenticate questions', () => {
  it('Authenticate questions should be returned OK', async () => {
    const crn = getCrn().CRN.toString()
    const jqlVars = '{ "crn": "' + crn + '" }'

    const businessQuery = getGetAuthenticateQuestionsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get customer details', () => {
  it('Customer details should be returned OK', async () => {
    const crn = getCrn().CRN.toString()
    const jqlVars = '{ "crn": "' + crn + '" }'

    const businessQuery = getGetCustomerDetailsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Update Person', () => {
  it('An existing person can be updated', async () => {
    const crn = getCrn().CRN.toString()
    const businessQuery = getUpdatePersonGqlMutation(crn)
    const res = await makePostCall(businessQuery)
    expect(res.status).to.equal(200)
  })
})

describe('Get Customers businesses', () => {
  it('Customers businesses should be returned OK', async () => {
    const crn = getCrn().CRN.toString()
    const jqlVars = '{ "crn": "' + crn + '" }'

    const businessQuery = getGetCustomerBusinessesGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Search for customer details by CRN', () => {
  it('A CRN search for customer details should be returned OK', async () => {
    const crn = getCrn().CRN.toString()
    const jqlVars =
      '{"searchString":"' +
      crn +
      '","searchType":"CRN", "pagination": {"page": 1,"perPage": 1}}'

    const businessQuery = getCustomerSearchGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Check to see if an email address is already registered', () => {
  it('Checking if an email address is a duplicate should be returned OK', async () => {
    const emailAddress = 'skeleton@the-closet.net'
    const jqlVars = '{"email": "' + emailAddress + '"}'

    const businessQuery = getIsCustomerEmailRegisteredGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Update an email address', () => {
  it('Updating an email address should be returned OK', async () => {
    const emailAddress = 'skeleton1@the-closet.net'
    const crn = getCrn().CRN.toString()
    const jqlVars =
      '{"input": {"crn": "' +
      crn +
      '","email": {"address": "' +
      emailAddress +
      '"}}}'

    const businessQuery = getUpdateCustomerEmailGqlMutation()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Update customer lock status', () => {
  it('Updating a customers lock status should be returned OK', async () => {
    const crn = getCrn().CRN.toString()
    const jqlVars =
      '{"input": {"crn": "' + crn + '","note":"mynote", "reason":"myreason"}}'

    const businessQuery = getUpdateLockCustomerGqlMutation()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Update customer unlock status', () => {
  it('Updating a customers unlock status should be returned OK', async () => {
    const crn = getCrn().CRN.toString()
    const jqlVars =
      '{"input": {"crn": "' + crn + '","note":"mynote", "reason":"myreason"}}'

    const businessQuery = getUpdateUnlockCustomerGqlMutation()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Deactivate customer', () => {
  it('Deactivating a customer should be returned OK', async () => {
    const crn = getCrn().CRN.toString()
    const jqlVars =
      '{"input": {"crn": "' + crn + '","note":"mynote", "reason":"myreason"}}'

    const businessQuery = getDeactivateCustomerGqlMutation()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Update customer authentication questions', () => {
  it('Updating a customers authentication questions should be returned OK', async () => {
    const crn = getCrn().CRN.toString()
    const jqlVars =
      '{"input": {"crn": "' +
      crn +
      '","memorableDate":"12-07-83", "memorableEvent":"DOB", "memorableLocation":"South Africa"}}'

    const customerQuery = getUpdateCustomerAuthenticationQuestionsGqlMutation()
    const res = await makePostCall(customerQuery, jqlVars)
    expect(res.status).to.equal(200)
    expect(res.data).to.not.have.property('errors')
  })
})
