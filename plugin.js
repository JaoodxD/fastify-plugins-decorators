module.exports = function (fastify, opts, done) {
  fastify.get('/', () => 'Hello world');
  done();
}
