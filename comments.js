// Create web server
//   - handle requests
//   - return responses
//   - return 404 if not found
//   - return 405 if method not allowed
//   - return 500 if internal error
//   - return 200 if success
//   - return 201 if created
//   - return 204 if no content
//   - return 400 if bad request
//   - return 401 if unauthorized
//   - return 403 if forbidden
//   - return 409 if conflict
//   - return 500 if internal error
//   - return 501 if not implemented
//   - return 503 if service unavailable
//   - return 504 if gateway timeout
//   - return 507 if insufficient storage
//   - return 508 if loop detected
//   - return 509 if bandwidth limit exceeded
//   - return 510 if not extended
//   - return 511 if network authentication required
//   - return 520 if web server is returning an unknown error
//   - return 522 if web server is down
//   - return 524 if web server is up but overloaded
//
// 2021-09-19    PV
// 2021-09-28    PV      Add CORS support
// 2021-10-16    PV      Add compression (gzip) support
// 2021-10-17    PV      Add /api/healthcheck
// 2021-10-18    PV      Add /api/healthcheck
// 2021-10-19    PV      Add /api/healthcheck
// 2021-10-20    PV      Add /api/healthcheck
// 2021-10-21    PV      Add /api/healthcheck
// 2021-10-22    PV      Add /api/healthcheck
// 2021-10-23    PV      Add /api/healthcheck
// 2021-10-24    PV      Add /api/healthcheck
// 2021-10-25    PV      Add /api/healthcheck
// 2021-10-26    PV      Add /api/healthcheck
// 2021-10-27    PV      Add /api/healthcheck
// 2021-10-28    PV      Add /api/