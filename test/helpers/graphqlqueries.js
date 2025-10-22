// TODO - pull these strings from a dynamic source

export function getGetPermissionsGroupsGqlQuery() {
  return `query GetPermissionsGroups {
            permissionGroups {
              id
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
