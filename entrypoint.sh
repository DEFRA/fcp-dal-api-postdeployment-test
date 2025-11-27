#!/bin/sh

echo "run_id: $RUN_ID"

if [ ${ENVIRONMENT} = "test" || ${ENVIRONMENT} = "ext-test" || ${ENVIRONMENT} = "perf-test"]
then
  # Get an auth token
  auth_url=https://login.microsoftonline.com/${TENANT_ID:?required secret not set!}/oauth2/v2.0/token
  client_auth=`echo -n "${CLIENT_ID:?required secret not set!}:${CLIENT_SECRET:?required secret not set!}" | base64  | tr -d '\n'`
  AUTH_TOKEN_LOC=`curl -s \
    --connect-timeout 5 \
    -x ${HTTP_PROXY:?required env var not set!} \
    -L ${auth_url} \
    -H "Authorization: Basic ${client_auth}" \
    -H 'content-type: application/x-www-form-urlencoded' \
    --data 'grant_type=client_credentials' \
    --data "scope=${CLIENT_SCOPE:?required secret not set!}" \
  | jq -r '.access_token'`

  # fast-fail when no token available!
  if [ -z "${auth_token}" ] ; then
    echo ERROR! Exiting because an auth token could not be retrieved
    exit 2
  fi
fi

export AUTH_TOKEN=$AUTH_TOKEN_LOC
npm test

npm run report:publish
publish_exit_code=$?

if [ $publish_exit_code -ne 0 ]; then
  echo "failed to publish test results"
  exit $publish_exit_code
fi

# At the end of the test run, if the suite has failed we write a file called 'FAILED'
if [ -f FAILED ]; then
  echo "test suite failed"
  cat ./FAILED
  exit 1
fi

echo "test suite passed"
exit 0
