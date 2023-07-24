module.exports = function (fastify, opts, done) {
  fastify.get('/', () => 'Hello world');
  fastify.get('/message', () => fastify.superDuperFunction());
  done();
}
