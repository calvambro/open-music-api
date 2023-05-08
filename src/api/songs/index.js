const SongsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'songs',
  version: '1.0.0',
  register: async (server, { services, validator }) => {
    const songsHandler = new SongsHandler(services, validator);
    server.route(routes(songsHandler));
  },
};
