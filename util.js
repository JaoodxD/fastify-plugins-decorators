const fp = require('fastify-plugin');

module.exports = fp(function (fastify, opts, done) {
  const superDuperFunction = () => ({ hello: 'world' });
  fastify.decorate('superDuperFunction', superDuperFunction);
  done()
});
