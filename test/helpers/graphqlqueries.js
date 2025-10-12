export function getGetPermissionsGroupsGqlQuery() {
  // TODO - pull this string from a dynamic source
  return `query GetPermissionsGroups {
            permissionGroups {
              id
            }
          }
         `
}
