import {
  getGetPermissionsGroupsGqlQuery,
  getGetCustomersBusinessPermissionsGroupsGqlQuery
} from '../helpers/graphqlqueries.js'
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
    const jqlVars = '{ "sbi": "1000000000", "crn": "1111111100" }'

    const permissionsQuery = getGetCustomersBusinessPermissionsGroupsGqlQuery()
    const res = await makePostCall(permissionsQuery, jqlVars)
    expect(res.status).to.equal(200)
  })
})
