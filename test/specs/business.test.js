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
  getGetCustomerBusinessesGqlQuery,
  getGetLandUsesGqlQuery
} from '../helpers/graphqlqueries.js'
import {
  getSbiCrnPair,
  getLandData,
  getCrn,
  getSbi
} from '../helpers/getdata.js'
import { makePostCall } from '../helpers/apicall.js'
import { expect } from 'chai'

describe('Get business details', () => {
  it('Business details should be returned OK', async () => {
    const sbi = getSbi().SBI.toString()
    const jqlVars = '{ "sbi": "' + sbi + '"}'

    const businessQuery = getGetBusinessDetailsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Toggle business lock', () => {
  it('Toggling the business lock return 200', async () => {
    const sbi = getSbi().SBI.toString()
    const jqlVars = '{ "input": { "sbi": "' + sbi + '", "reason": "test" } }'

    const businessQuery = getToggleBusinessLockGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get business messages', () => {
  it('Business messages should be returned OK', async () => {
    const sbiCrnPair = getSbiCrnPair()
    const sbi = sbiCrnPair.SBI.toString()
    const crn = sbiCrnPair.CRN.toString()

    const jqlVars = '{ "sbi": "' + sbi + '", "crn": "' + crn + '" }'

    const businessQuery = getGetMessagesGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get business customer authorisations', () => {
  it('Authorisations should be returned OK', async () => {
    const sbiCrnPair = getSbiCrnPair()
    const sbi = sbiCrnPair.SBI.toString()
    const crn = sbiCrnPair.CRN.toString()

    const jqlVars = '{ "sbi": "' + sbi + '", "crn": "' + crn + '" }'

    const businessQuery = getGetAuthorisationsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

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

describe('Get CPH details', () => {
  it('CPH details should be returned OK', async () => {
    const sbi = getSbi().SBI.toString()
    const jqlVars = '{ "sbi": "' + sbi + '"}'

    const businessQuery = getGetCphGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get land parcel details', () => {
  it('Land parcel details should be returned OK', async () => {
    const sbi = getSbi().SBI.toString()
    const jqlVars = '{ "sbi": "' + sbi + '"}'

    const businessQuery = getGetLandParcelsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get Land Cover Summary details', () => {
  it('Land cover summary details should be returned OK', async () => {
    const sbi = getSbi().SBI.toString()
    const jqlVars = '{ "sbi": "' + sbi + '"}'

    const businessQuery = getGetLandCoverSummaryGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get Land Covers', () => {
  it('Land covers should be returned OK', async () => {
    const landData = getLandData()
    const sbi = landData.SBI.toString()
    const sheetId = landData.SHEETID.toString()
    const parcelId = landData.PARCELID.toString()
    const jqlVars =
      '{"sbi":"' +
      sbi +
      '","sheetId":"' +
      sheetId +
      '","parcelId":"' +
      parcelId +
      '"}'

    const businessQuery = getGetLandCoversGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get Agreements', () => {
  it('Agreements should be returned OK', async () => {
    const sbi = getSbi().SBI.toString()
    const jqlVars = '{ "sbi": "' + sbi + '"}'

    const businessQuery = getGetAgreementsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Get Applications', () => {
  it('Applications should be returned OK', async () => {
    const sbi = getSbi().SBI.toString()
    const jqlVars = '{ "sbi": "' + sbi + '"}'

    const businessQuery = getGetApplicationsGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})

describe('Create business', () => {
  it('A new business can be created', async () => {
    const crn = getCrn().CRN.toString()
    const businessQuery = getCreateBusinessGqlMutation(crn)
    const res = await makePostCall(businessQuery)
    expect(res.status).to.equal(200)
  })
})

describe('Update business name', () => {
  it('An existing businesses name can be updated', async () => {
    const sbi = getSbi().SBI.toString()
    const businessQuery = getUpdateBusinessNameGqlMutation(sbi)
    const res = await makePostCall(businessQuery)
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

describe('Get businesses customers', () => {
  it('Businesses customers should be returned OK', async () => {
    const sbi = getSbi().SBI.toString()
    const jqlVars = '{ "sbi": "' + sbi + '"}'

    const businessQuery = getGetBusinessesCustomersGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
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

describe('Get a businesses land uses', () => {
  it('A businesses land uses should be returned OK', async () => {
    const landData = getLandData()
    const sbi = landData.SBI.toString()
    const sheetId = landData.SHEETID.toString()
    const parcelId = landData.PARCELID.toString()
    const jqlVars =
      '{"sbi":"' +
      sbi +
      '","sheetId":"' +
      sheetId +
      '","parcelId":"' +
      parcelId +
      '"}'

    const businessQuery = getGetLandUsesGqlQuery()
    const res = await makePostCall(businessQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})
