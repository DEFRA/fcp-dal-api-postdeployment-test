// TODO - pull these strings from a dynamic source

export function getGetPermissionsGroupsGqlQuery() {
  return `query GetPermissionsGroups {
            permissionGroups {
              id
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
