const middleware = {}

middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['unAuthenticated'] = require('../middleware/unAuthenticated.js')
middleware['unAuthenticated'] = middleware['unAuthenticated'].default || middleware['unAuthenticated']

export default middleware
