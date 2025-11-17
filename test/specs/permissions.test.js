import {
  getGetPermissionsGroupsGqlQuery,
  getGetCustomersBusinessPermissionsGroupsGqlQuery
} from '../helpers/graphqlqueries.js'
import { getSbiCrnPair } from '../helpers/getdata.js'
import { makePostCall } from '../helpers/apicall.js'
import { expect } from 'chai'

describe('Get permissions groups', () => {
  it('Permission groups should be returned OK', async () => {
    const permissionsQuery = getGetPermissionsGroupsGqlQuery()
    const res = await makePostCall(permissionsQuery)
    expect(res.status).to.equal(200)
  })
})

describe('Get customers business permission groups', () => {
  it('Customers business permission groups should be returned OK', async () => {
    const sbiCrnPair = getSbiCrnPair()
    const sbi = sbiCrnPair.SBI
    const crn = sbiCrnPair.CRN
    const jqlVars = '{ "sbi": "' + sbi + '", "crn": "' + crn + '" }'

    const permissionsQuery = getGetCustomersBusinessPermissionsGroupsGqlQuery()
    const res = await makePostCall(permissionsQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})
