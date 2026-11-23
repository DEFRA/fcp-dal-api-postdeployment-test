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
  getUpdateCustomerAuthenticationQuestionsGqlMutation,
  getCreateCustomerGqlMutation,
  getDeleteCustomerGqlMutation,
  getAddCustomerGqlMutation,
  getDuplicateCustomerGqlQuery
} from '../helpers/graphqlqueries.js'
import {
  getCrn,
  randomString,
  getLockableCrn,
  getRemoveableSbiCrnPair,
  getExistingCustomerDetails
} from '../helpers/getdata.js'
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

describe('Update customer lock and unlock status', () => {
  const crn = getLockableCrn().CRN.toString()
  const jqlVars =
    '{"input": {"crn": "' + crn + '","note":"mynote", "reason":"myreason"}}'

  before('Updating a customers lock status should be returned OK', async () => {
    const businessQuery = getUpdateLockCustomerGqlMutation()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })

  it('Updating a customers unlock status should be returned OK', async () => {
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

describe('Create customer', () => {
  it('Creating a customer should return OK', async () => {
    const jqlVars =
      '{"input": {"first": "Testy' +
      randomString(5, 15) +
      '","last": "Tester' +
      randomString(5, 15) +
      '}}'

    const customerQuery = getCreateCustomerGqlMutation()
    const res = await makePostCall(customerQuery, jqlVars)
    expect(res.status).to.equal(200)
    expect(res.data).to.not.have.property('errors')
  })
})

describe('Add and Delete customer from business', () => {
  const removeableSbiCrnPair = getRemoveableSbiCrnPair()
  const rSbi = removeableSbiCrnPair.SBI.toString()
  const rCrn = removeableSbiCrnPair.CRN.toString()

  before('Adding a customer to a business should return OK', async () => {
    const jqlVars =
      '{ "sbi": "' +
      rSbi +
      '", "crn": "' +
      rCrn +
      '", "role": "Agent", "permissions": [{ "id": "BUSINESS_DETAILS", "level": "FULL_PERMISSION"}]}'
    const customerQuery = getAddCustomerGqlMutation()
    const res = await makePostCall(customerQuery, jqlVars)
    expect(res.status).to.equal(200)
    expect(res.data).to.not.have.property('errors')
  })

  it('Deleting a customer from a business should return OK', async () => {
    const jqlVars = '{ "sbi": "' + rSbi + '", "crn": "' + rCrn + '" }'
    const customerQuery = getDeleteCustomerGqlMutation()
    const res = await makePostCall(customerQuery, jqlVars)
    expect(res.status).to.equal(200)
    expect(res.data).to.not.have.property('errors')
  })
})

describe('Check for customer duplicate', () => {
  it('A query for a duplicate customer should be returned OK', async () => {
    const fName = getExistingCustomerDetails().fName.toString()
    const lName = getExistingCustomerDetails().lName.toString()
    const dob = getExistingCustomerDetails().dob.toString()
    const mobile = getExistingCustomerDetails().mobile.toString()
    const landline = getExistingCustomerDetails().mobile.toString()

    const jqlVars =
      '{"input": {"first": "' +
      fName +
      '","last":"' +
      lName +
      '", "dateOfBirth":"' +
      dob +
      '", "phone": { "mobile":"' +
      mobile +
      '","landline":"' +
      landline +
      '"}}}'

    const businessQuery = getDuplicateCustomerGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})
