import { getGetPermissionsGroupsGqlQuery } from '../helpers/graphqlqueries.js'
import { makePostCall } from '../helpers/apicall.js'
import { expect } from 'chai'

describe('GetPermissionsGroups', () => {
  it('Permission groups should be returned OK', async () => {
    const permissionsQuery = getGetPermissionsGroupsGqlQuery()
    const res = await makePostCall(permissionsQuery)
    expect(res.status).to.equal(200)
  })
})
