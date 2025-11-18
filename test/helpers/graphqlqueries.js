// TODO - pull these strings from a dynamic source

export function getGetPermissionsGroupsGqlQuery() {
  return `query GetPermissionsGroups {
            permissionGroups {
              id
            }
          }
         `
}

export function getGetBusinessesCustomersGqlQuery() {
  return `query BusinessCustomers ($sbi: ID!) {
          	business(sbi: $sbi) {
          		customers {
                    	crn
                    	role
          		}
          	}
          }
         `
}

export function getGetCustomerBusinessesGqlQuery() {
  return `query Query ($crn: ID!) {
          	customer(crn: $crn) {
          		businesses {
          			name
          		}
          		crn
          		personId
          	}
          }

         `
}

export function getGetCustomersBusinessPermissionsGroupsGqlQuery() {
  return `query Customer ($crn: ID!, $sbi: ID!) {
          	customer(crn: $crn) {
          		crn
          		business(sbi: $sbi) {
          			role
          			permissionGroups {
          				level
          				id
          			}
          		}
          	}
          }
         `
}

export function getGetLandCoversGqlQuery() {
  return `query GetLandCovers($sbi: ID!, $sheetId: ID!, $parcelId: ID!) {
            business(sbi: $sbi) {
              land {
                parcelCovers(sheetId: $sheetId, parcelId: $parcelId) {
                  area
                  code
                  id
                  isBpsEligible
                  name
                }
              }
            }
          }
         `
}

export function getGetAgreementsGqlQuery() {
  return `query Agreements ($sbi: ID!) {
              business(sbi: $sbi) {
                  agreements {
                      contractId
                      name
                      status
                      contractType
                      schemeYear
                      startDate
                      endDate
                      paymentSchedules {
                          optionCode
                          optionDescription
                          commitmentGroupStartDate
                          commitmentGroupEndDate
                          year
                          sheetName
                          parcelName
                          actionArea
                          actionMTL
                          actionUnits
                          parcelTotalArea
                          startDate
                          endDate
                      }
                  }
              }
          }
         `
}

export function getGetApplicationsGqlQuery() {
  return `query Applications ($sbi: ID!) {
              business(sbi: $sbi) {
                applications {
                  sbi
                  id
                  subjectId
                  year
                  name
                  moduleCode
                  scheme
                  statusCodeP
                  statusCodeS
                  status
                  submissionDate
                  portalStatusP
                  portalStatusS
                  portalStatus
                  active
                  transitionId
                  transitionName
                  agreementReferences
                  transitionHistory {
                    id
                    name
                    timestamp
                    checkStatus
                  }
                }
              }
          }
         `
}

export function getCreateBusinessGqlMutation(crn) {
  return `mutation {
            createBusiness(input:{crn:${crn}, name:"AcmeFarmsLtd",vat:"GB123456789",traderNumber:"TR12345",vendorNumber:"VN67890",correspondenceAddress:{line1:"POBox123",city:"Farmville",postalCode:"FV12AB",country:"UK"},typeCode:2,email:{address:"info@acmefarms.co.uk"},correspondenceEmail:{address:"correspondence@acmefarms.co.uk"},phone:{landline:"+441234567890",mobile:"+441234567891"},correspondencePhone:{landline:"+441234567892"},legalStatusCode:1,registrationNumbers:{companiesHouse:"12345678",charityCommission:"87654321"},landConfirmed:true,dateStartedFarming:"2021-05-27T12:46:17.305Z"}
            ){
              success
              business {
                info {
                  address {
                    buildingName
                    buildingNumberRange
                    city
                    country
                    pafOrganisationName
                    line1
                    line2
                    line3
                    line4
                    line5
                    flatName
                    street
                    county
                    postalCode
                    uprn
                    dependentLocality
                    doubleDependentLocality
                    typeId
                  }
                  correspondenceAddress {
                    line1
                    line2
                    line3
                    line4
                    pafOrganisationName
                    line5
                    buildingNumberRange
                    buildingName
                    flatName
                    street
                    city
                    county
                    postalCode
                    country
                    uprn
                    dependentLocality
                    doubleDependentLocality
                    typeId
                  }
                  name
                  reference
                  vat
                  traderNumber
                  vendorNumber
                  isCorrespondenceAsBusinessAddress
                  email {
                    address
                    validated
                  }
                  correspondenceEmail {
                    address
                    validated
                  }
                  phone {
                    mobile
                    landline
                  }
                  correspondencePhone {
                    mobile
                    landline
                  }
                  legalStatus {
                    code
                    type
                  }
                  type {
                    code
                    type
                  }
                  registrationNumbers {
                    companiesHouse
                    charityCommission
                  }
                  landConfirmed
                  dateStartedFarming
                }
              }
            }
          }
         `
}

export function getUpdateBusinessNameGqlMutation(sbi) {
  return `mutation {
            updateBusinessName(input: {sbi: "${sbi}",name: "newname"}) {
              success
              business {
                sbi
              }
            }
          }
         `
}

export function getUpdatePersonGqlMutation(crn) {
  return `mutation {
            updateCustomerAddress(input: { crn: "${crn}", address: { buildingName: "newBuildingName", buildingNumberRange: "newBuildingNumberRange", city: "newCity", country: "newCountry", county: "newCounty", dependentLocality: "newDependentLocality", doubleDependentLocality: "newDoubleDependentLocality", flatName: "newFlatName", line1: "newLine1", line2: "newLine2", line3: "newLine3", line4: "newLine4", line5: "newLine5", pafOrganisationName: "newPafOrganisationName", postalCode: "newPostalCode", street: "newStreet", uprn: "newUprn"} }) {
              success
              customer {
                info {
                  address {
                    pafOrganisationName
                    line1
                    line2
                    line3
                    line4
                    line5
                    buildingNumberRange
                    buildingName
                    flatName
                    street
                    city
                    county
                    postalCode
                    country
                    uprn
                    dependentLocality
                    doubleDependentLocality
                  }
                }
              }
            }
          }
         `
}

export function getGetCphGqlQuery() {
  return `query GetCph($sbi: ID!) {
            business(sbi: $sbi) {
              countyParishHoldings {
                address
                cphNumber
                endDate
                parish
                species
                startDate
                xCoordinate
                yCoordinate
              }
            }
          }
         `
}

export function getGetLandParcelsGqlQuery() {
  return `query GetLandParcels($sbi: ID!) {
            business(sbi: $sbi) {
              land {
                parcels {
                  area
                  id
                  parcelId
                  pendingDigitisation
                  sheetId
                }
              }
            }
          }
         `
}

export function getGetLandCoverSummaryGqlQuery() {
  return `query GetLandCoverSummary($sbi: ID!) {
            business(sbi: $sbi) {
              land {
                summary {
                  arableLandArea
                  permanentCropsArea
                  permanentGrasslandArea
                  totalArea
                  totalParcels
                }
              }
            }
          }
         `
}

export function getGetMessagesGqlQuery() {
  return `query BusinessMessages($crn: ID!, $sbi: ID!) {
          	customer(crn: $crn) {
          		personId
          		crn
          		business(sbi: $sbi) {
          			messages {
          				id
          				subject
          				date
          				body
          				read
          				deleted
          			}
          		}
          	}
          }
         `
}

export function getGetAuthorisationsGqlQuery() {
  return `query Customer ($crn: ID!, $sbi: ID!) {
          	customer(crn: $crn) {
          		crn
          		business(sbi: $sbi) {
          			role
          			permissionGroups {
          				level
          				id
          			}
          		}
          	}
          }
         `
}

export function getGetAuthenticateQuestionsGqlQuery() {
  return `query Customer ($crn: ID!) {
          	customer(crn: $crn) {
          		crn
          		authenticationQuestions {
          			isFound
          			updatedAt
          			memorableDate
          			memorableEvent
          			memorableLocation
          		}
          	}
          }
         `
}

export function getGetCustomerDetailsGqlQuery() {
  return `query GetCustomerDetails($crn: ID!) {
            customer(crn: $crn) {
              crn
              personId
              info {
                name {
                  title
                  otherTitle
                  first
                  middle
                  last
                }
                dateOfBirth
                phone {
                  mobile
                  landline
                }
                email {
                  address
                  validated
                }
                status {
                  locked
                  confirmed
                  deactivated
                }
                address {
                  pafOrganisationName
                  line1
                  line2
                  line3
                  line4
                  line5
                  buildingNumberRange
                  buildingName
                  flatName
                  street
                  city
                  county
                  postalCode
                  country
                  uprn
                  dependentLocality
                  doubleDependentLocality
                  typeId
                }
                doNotContact
                personalIdentifiers
              }
            }
          }
         `
}

export function getToggleBusinessLockGqlQuery() {
  return `mutation UnlockBusiness ($input: UpdateBusinessLockUnlockInput!) {
                  updateBusinessUnlock(input: $input) {
                      success
                      business {
                          sbi
                          info {
                              status {
                                  locked
                              }
                          }
                      }
                  }
        }
        `
}

export function getGetBusinessDetailsGqlQuery() {
  return `query GetBusinessDetails($sbi: ID!) {
            business(sbi: $sbi) {
              info {
                additionalBusinessActivities {
                  code
                  type
                }
                additionalSbis
                address {
                  pafOrganisationName
                  line1
                  line2
                  line3
                  line4
                  line5
                  buildingNumberRange
                  buildingName
                  flatName
                  street
                  city
                  county
                  postalCode
                  country
                  uprn
                  dependentLocality
                  doubleDependentLocality
                  typeId
                }
                correspondenceAddress {
                  pafOrganisationName
                  line1
                  line2
                  line3
                  line4
                  line5
                  buildingNumberRange
                  buildingName
                  flatName
                  street
                  city
                  county
                  postalCode
                  country
                  uprn
                  dependentLocality
                  doubleDependentLocality
                  typeId
                }
                correspondenceEmail {
                  address
                  validated
                }
                correspondencePhone {
                  mobile
                  landline
                }
                dateStartedFarming
                email {
                  address
                  validated
                }
                hasAdditionalBusinessActivities
                name
                reference
                vat
                traderNumber
                vendorNumber
                isCorrespondenceAsBusinessAddress
                phone {
                  mobile
                  landline
                }
                legalStatus {
                  code
                  type
                }
                type {
                  code
                  type
                }
                registrationNumbers {
                  companiesHouse
                  charityCommission
                }
                lastUpdated
                isFinancialToBusinessAddress
                hasLandInNorthernIreland
                hasLandInScotland
                hasLandInWales
                landConfirmed
                isAccountablePeopleDeclarationCompleted
                status {
                  locked
                  confirmed
                  deactivated
                }
              }
              organisationId
              sbi
            }
          }
         `
}
