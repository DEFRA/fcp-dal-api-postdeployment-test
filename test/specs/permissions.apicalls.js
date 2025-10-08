import { browser, expect } from '@wdio/globals'
const axios = require("axios");
const { expect } = require("chai");

import { getGetPermissionsGroupsGqlQuery } from "/test/helpers/graphqlqueries.js";
import { makePostCall } from "/test/helpers/apicall.js";

describe('GetPermissionsGroups', () => {
  it('Should be on the "Home" page', async () => {
    const res = await makePostCall(await getGetPermissionsGroupsGqlQuery())
    expect(res.status).equal(200);
  })
}
