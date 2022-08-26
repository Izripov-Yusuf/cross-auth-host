const createHost = require('cross-domain-storage/host')
const storageHost = createHost([
  {
    origin: 'http://localhost:3000',
    allowedMethods: ['get', 'set']
  },
  {
    origin: 'http://localhost:2100',
    allowedMethods: ['get', 'set']
  }
])
